import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';

import { Role } from '@hb/types';

import { TokenPairDto } from './../dto';
import { RefreshTokenEntity } from './../entities';

@Injectable()
export class TokenService {
  constructor(
    @InjectRepository(RefreshTokenEntity)
    private readonly tokenRepo: Repository<RefreshTokenEntity>,
    private readonly jwtService: JwtService,
    private readonly connection: Connection,
  ) {}

  createRefreshToken({
    userId,
    userAgent = null,
    ip = null,
  }: {
    userId: number;
    userAgent?: string;
    ip?: string;
  }) {
    const rawRefreshToken = this.tokenRepo.create({
      userId,
      userAgent,
      ip,
    });

    return this.tokenRepo.save(rawRefreshToken);
  }

  async signTokens({
    id,
    tokenId,
    email,
    role,
  }: {
    id: number;
    tokenId: number;
    email: string;
    role: Role;
  }): Promise<TokenPairDto> {
    const [refreshToken, accessToken] = await Promise.all([
      this.jwtService.signAsync(
        { id, tokenId, type: 'refresh' },
        { expiresIn: '7d' },
      ),
      this.jwtService.signAsync({
        id,
        tokenId,
        email,
        role,
        type: 'access',
      }),
    ]);

    return {
      refreshToken,
      accessToken,
    };
  }

  extractIdFromToken(token: string): number | null {
    const decoded = this.jwtService.decode(token);

    if (!decoded || typeof decoded === 'string') return null;

    return decoded.tokenId;
  }

  async refreshToken(
    id: number,
    {
      userId,
      userAgent = null,
      ip = null,
    }: {
      userId: number;
      userAgent?: string;
      ip?: string;
    },
  ) {
    const rawRefreshToken = this.tokenRepo.create({
      userId,
      userAgent,
      ip,
    });

    const queryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const [refreshToken] = await Promise.all([
        queryRunner.manager.save(rawRefreshToken),
        queryRunner.manager.delete(RefreshTokenEntity, id),
      ]);

      await queryRunner.commitTransaction();

      return refreshToken;
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  revokeRefreshToken(id: number) {
    return this.tokenRepo.delete(id);
  }

  async isRefreshTokenRevoked(id: number): Promise<boolean> {
    const foundToken = await this.tokenRepo.findOne(id);

    return !foundToken;
  }

  getUserTokens(userId: number) {
    return this.tokenRepo.find({
      where: {
        userId,
      },
      select: ['id', 'userAgent', 'createdAt', 'ip'],
    });
  }

  async get(id: number) {
    const token = await this.tokenRepo.findOne(id, {
      relations: ['user'],
    });

    if (!token) throw new NotFoundException('Token not found');

    return token;
  }
}

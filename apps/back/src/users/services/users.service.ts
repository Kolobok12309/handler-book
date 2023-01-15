import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { FindOneOptions, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { hash, compare } from 'bcrypt';
import { promisify } from 'util';

import { Role } from '@hb/types';

import { UserEntity } from '../entities';
import {
  UserDto,
  CreateUserDto,
  UpdateUserDto,
  UpdatePasswordDto,
} from '../dto';
import { SALT_ROUNDS } from '../user.consts';

const asyncHash = promisify(hash);
const asyncCompare = promisify(compare);

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  async isEmailAvailable(email: string): Promise<boolean> {
    return !(await this.userRepo.findOne({
      where: {
        email,
      },
    }));
  }

  async create({ password, ...etc }: CreateUserDto) {
    const hashedPass = await asyncHash(password, SALT_ROUNDS);

    const { generatedMaps } = await this.userRepo.insert({
      password: hashedPass,
      ...etc,
    });

    return {
      ...etc,
      ...generatedMaps[0],
    } as UserDto;
  }

  findAll() {
    return `This action returns all users`;
  }

  async findById(
    id: number,
    params: FindOneOptions<UserEntity> = {},
  ): Promise<UserDto> {
    const user = await this.userRepo.findOne(id, params);

    if (!user) throw new NotFoundException('User not found');

    return user;
  }

  async findByLogin(
    login: string,
    params: FindOneOptions<UserEntity> = {},
  ): Promise<UserDto> {
    const user = await this.userRepo.findOne({
      where: [{ email: login }],
      ...params,
    });

    if (!user) throw new NotFoundException('User not found');

    return user;
  }

  async update(
    id: number,
    { email, name, role = Role.User }: UpdateUserDto,
  ): Promise<UserDto> {
    const oldUser = await this.userRepo.findOne(id);

    if (!oldUser) throw new NotFoundException('User not found');

    const updatedUser = await this.userRepo.save({
      id,
      email,
      name,
      role,
    });

    return {
      ...oldUser,
      ...updatedUser,
    };
  }

  async changePassword(
    id: number,
    needConfirmPasswords = true,
    { password, oldPassword = '' }: UpdatePasswordDto,
  ) {
    const user = await this.userRepo.findOne(id, {
      select: ['password'],
    });

    if (!user) throw new NotFoundException('User not found');

    if (needConfirmPasswords) {
      const isPasswordRight = await asyncCompare(oldPassword, user.password);

      if (!isPasswordRight) throw new ConflictException('Wrong oldPassword');
    }

    const hashedPassword = await asyncHash(password, SALT_ROUNDS);

    await this.userRepo.save({
      id,
      password: hashedPassword,
    });

    return true;
  }

  async delete(id: number) {
    const { affected } = await this.userRepo.delete(id);

    if (!affected) throw new NotFoundException('User not found');

    return true;
  }
}

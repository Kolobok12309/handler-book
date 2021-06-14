import {
  Controller,
  Body,
  Post,
  UseGuards,
  UnauthorizedException,
  Ip,
  Headers,
  Get,
  Param,
  Delete,
  NotFoundException,
  ConflictException,
  ForbiddenException,
} from '@nestjs/common';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiBearerAuth,
  ApiBody,
  ApiUnauthorizedResponse,
  ApiHeader,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiConflictResponse,
  ApiForbiddenResponse,
} from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { Role, TokenUser } from '@hb/types';

import { UsersService, AuthService, TokenService } from '../services';
import { SignInDto, SignUpDto } from '../dto';
import { JwtGuard, JwtRefreshGuard } from '../guards';
import { Auth, User } from '../decorators';

@ApiTags('Authorization')
@Controller()
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly tokenService: TokenService,
    private readonly usersService: UsersService,
  ) {}

  @Post('signIn')
  @ApiBody({ type: SignInDto })
  @ApiHeader({
    name: 'user-agent',
    required: false,
  })
  @ApiCreatedResponse({
    description: 'User logged in',
  })
  @ApiUnauthorizedResponse()
  async signIn(
    @Body() { email, password }: SignInDto,
    @Ip() ip?: string,
    @Headers('user-agent') userAgent?: string,
  ) {
    const user = await this.authService.validateUser({
      login: email,
      password,
    });

    if (!user) throw new UnauthorizedException('Wrong username or password');

    const { id: tokenId } = await this.tokenService.createRefreshToken({
      userId: user.id,
      userAgent,
      ip,
    });

    const { refreshToken, accessToken } = await this.tokenService.signTokens({
      id: user.id,
      tokenId,
      email,
      role: user.role,
    });

    return {
      accessToken,
      refreshToken,
    };
  }

  @Post('signUp')
  @ApiBody({ type: SignUpDto })
  @ApiCreatedResponse({ description: 'User registered' })
  @ApiConflictResponse({ description: 'Email is already in use' })
  async signUp(@Body() { email, ...etc }: SignUpDto) {
    const isEmailAvailable = await this.usersService.isEmailAvailable(email);

    if (!isEmailAvailable)
      throw new ConflictException('Email is already in use');

    return this.usersService.create({
      ...etc,
      email,
      role: Role.User,
    });
  }

  @UseGuards(JwtGuard)
  @Post('signOut')
  @ApiBearerAuth()
  @ApiCreatedResponse({ description: 'User logged out and token invalidated' })
  async signOut(@Headers('Authorization') bearer: string) {
    const [, accessToken = ''] = bearer.split(' ');
    const refreshId = this.tokenService.extractIdFromToken(accessToken);

    return this.tokenService.revokeRefreshToken(refreshId);
  }

  @UseGuards(JwtRefreshGuard)
  @Post('refresh')
  @ApiHeader({
    name: 'user-agent',
    required: false,
  })
  @ApiCreatedResponse({ description: 'Pair of updated tokens' })
  @ApiUnauthorizedResponse({ description: 'Wrong refresh token' })
  async refreshToken(
    @Body('refresh_token') token: string,
    @User() { id }: { id: number },
    @Ip() ip?: string,
    @Headers('user-agent') userAgent?: string,
  ) {
    const tokenId = this.tokenService.extractIdFromToken(token);

    const [isTokenRevoked, userFromDb] = await Promise.all([
      this.tokenService.isRefreshTokenRevoked(tokenId),
      this.usersService.findById(id),
    ]);

    if (isTokenRevoked || !userFromDb) throw new UnauthorizedException();

    const refreshTokenEntity = await this.tokenService.refreshToken(tokenId, {
      userId: id,
      userAgent,
      ip,
    });

    if (!refreshTokenEntity) throw new UnauthorizedException();

    const { accessToken, refreshToken } = await this.tokenService.signTokens({
      id,
      tokenId: refreshTokenEntity.id,
      email: userFromDb.email,
      role: userFromDb.role,
    });

    return {
      accessToken,
      refreshToken,
    };
  }

  @Get('/tokens')
  @Auth([Role.Admin, Role.User])
  @ApiOkResponse({ description: 'List of active tokens' })
  getTokens(@User() { id }: TokenUser) {
    return this.tokenService.getUserTokens(id);
  }

  @Get('/tokens/:userId')
  @Auth([Role.Admin])
  @ApiOkResponse({ description: 'List of user active tokens' })
  getUserTokens(@Param('userId') userId: number) {
    return this.tokenService.getUserTokens(userId);
  }

  @Delete('/tokens/:id')
  @Auth([Role.Admin, Role.User])
  @ApiOkResponse({ description: 'Token successfully revoked' })
  @ApiNotFoundResponse()
  @ApiForbiddenResponse()
  async revokeToken(
    @User() { id, role }: TokenUser,
    @Param('id') tokenId: number,
  ) {
    const token = await this.tokenService.get(tokenId);

    if (!token) throw new NotFoundException('Token not found');

    if (role !== Role.Admin && token.userId !== id)
      throw new ForbiddenException();

    await this.tokenService.revokeRefreshToken(tokenId);
  }
}

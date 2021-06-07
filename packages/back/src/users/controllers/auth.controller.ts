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
import { Role } from '@hb/types';

import { UsersService, AuthService, TokenService } from '../services';
import { SignInDto, SignUpDto } from '../dto';

@ApiTags('Authorization')
@Controller()
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly tokenService: TokenService,
    private readonly usersService: UsersService,
    private readonly configService: ConfigService,
  ) {}

  @Post('signIn')
  @ApiBody({ type: SignInDto })
  @ApiCreatedResponse({
    description: 'User logged in',
  })
  @ApiUnauthorizedResponse()
  async signIn(@Body() { email, password }: SignInDto) {
    return true;
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
}

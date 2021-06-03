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

import { AuthService, JwtService } from './services';
import { SignInDto } from './dto';

@ApiTags('Authorization')
@Controller()
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
    // private readonly userService: UserService,
    private readonly configService: ConfigService,
  ) {}

  @Post('signIn')
  @ApiUnauthorizedResponse()
  async signIn(@Body() { email, password }: SignInDto) {
    return true;
  }
}

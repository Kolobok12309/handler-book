import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthController } from './auth.controller';
import { JwtService, AuthService } from './services';

@Module({
  providers: [AuthService, JwtService],
  controllers: [AuthController],
  imports: [ConfigModule],
})
export class AuthModule {}

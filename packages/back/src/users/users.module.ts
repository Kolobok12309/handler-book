import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { UsersService, AuthService, TokenService } from './services';
import { UsersController, AuthController } from './controllers';
import { UserEntity, RefreshTokenEntity } from './entities';

@Module({
  controllers: [UsersController, AuthController],
  providers: [UsersService, AuthService, TokenService],
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([UserEntity, RefreshTokenEntity]),
  ],
  exports: [UsersService],
})
export class UsersModule {}

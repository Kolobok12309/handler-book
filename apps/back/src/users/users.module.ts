import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

import { UsersService, AuthService, TokenService } from './services';
import { UsersController, AuthController } from './controllers';
import { UserEntity, RefreshTokenEntity } from './entities';
import { JwtStrategy, JwtRefreshStrategy } from './strategies';

@Module({
  controllers: [UsersController, AuthController],
  providers: [
    UsersService,
    AuthService,
    TokenService,
    JwtRefreshStrategy,
    JwtStrategy,
  ],
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([UserEntity, RefreshTokenEntity]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET', 'my_jwt_secret'),
        signOptions: { expiresIn: '1d' },
      }),
    }),
  ],
  exports: [UsersService],
})
export class UsersModule {}

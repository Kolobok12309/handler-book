import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserEntity } from './entities';
import { AuthModule } from './auth';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [ConfigModule, AuthModule],
  exports: [UsersService],
})
export class UsersModule {}

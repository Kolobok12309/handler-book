import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { UsersModule } from './users';
import { DbModule } from './db';
import { StorageModule } from './storage';

@Module({
  imports: [ConfigModule.forRoot(), DbModule, UsersModule, StorageModule],
})
export class AppModule {}

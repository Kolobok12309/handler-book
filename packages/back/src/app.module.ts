import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { UsersModule } from './users';
import { DbModule } from './db';
import { StorageModule } from './storage';

@Module({
  imports: [DbModule, UsersModule, StorageModule, ConfigModule.forRoot()],
})
export class AppModule {}

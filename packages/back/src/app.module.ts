import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { UsersModule } from './users';
import { DbModule } from './db';

@Module({
  imports: [DbModule, UsersModule, ConfigModule.forRoot()],
})
export class AppModule {}

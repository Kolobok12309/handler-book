import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { UsersModule } from './users';
import { DbModule } from './db';
import { StorageModule } from './storage';
import { ClientsModule } from './clients';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DbModule,
    UsersModule,
    StorageModule,
    ClientsModule,
  ],
})
export class AppModule {}

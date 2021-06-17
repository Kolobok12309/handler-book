import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';

import { StorageService } from './storage.service';
import { StorageController } from './storage.controller';

@Module({
  controllers: [StorageController],
  providers: [StorageService],
  imports: [
    ConfigModule,
    MulterModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        dest: configService.get('STATIC_PATH', './uploads'),
        limits: {
          fileSize: configService.get<number>(
            'MAX_FILE_SIZE',
            10 * 1024 * 1024,
          ),
        },
      }),
      inject: [ConfigService],
    }),
  ],
  exports: [StorageService],
})
export class StorageModule {}

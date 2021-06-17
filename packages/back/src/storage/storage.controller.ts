import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { Express } from 'express';

import { StorageService } from './storage.service';

@ApiTags('Storage')
@Controller()
export class StorageController {
  constructor(
    private readonly configService: ConfigService,
    private readonly storageService: StorageService,
  ) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async upload(@UploadedFile() file: Express.Multer.File) {
    const uploaded = await this.storageService.add(file);

    return uploaded;
  }
}

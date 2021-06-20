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

import { FileCategory, Role, TokenUser } from '@hb/types';

import { Auth, User } from '@/users';

import { StorageService } from './storage.service';

@ApiTags('Storage')
@Controller()
export class StorageController {
  constructor(
    private readonly configService: ConfigService,
    private readonly storageService: StorageService,
  ) {}

  // @Auth([Role.Admin, Role.User])
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async upload(
    @UploadedFile() file: Express.Multer.File,
    // @User() user: TokenUser,
  ) {
    const uploaded = await this.storageService.add(file, {
      userId: null,
      category: FileCategory.images,
    });

    return uploaded;
  }
}

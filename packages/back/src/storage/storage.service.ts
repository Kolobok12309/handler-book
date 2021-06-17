import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import debug from 'debug';
import { Express } from 'express';
import { resolve } from 'path';

import { LoadedFile, Storage } from './interfaces';
import { EncodeStorage } from './storages';

const log = debug('@hb/back:storage');

@Injectable()
export class StorageService {
  storage: Storage;

  constructor(private readonly configService: ConfigService) {}

  onModuleInit() {
    log('Init service');
    this.storage = new EncodeStorage();
  }

  async add(
    fileOrFiles: Express.Multer.File | Express.Multer.File[],
  ): Promise<LoadedFile[]> {
    const files = [].concat(fileOrFiles) as Express.Multer.File[];

    const fileNames = files.map(({ originalname }) => originalname);
    log(`Upload files ${fileNames.join(', ')}`);

    return Promise.all(
      files.map(({ originalname, path, mimetype }) =>
        this.storage.add({
          name: originalname,
          path: resolve(path),
          mimetype,
        }),
      ),
    );
  }
}

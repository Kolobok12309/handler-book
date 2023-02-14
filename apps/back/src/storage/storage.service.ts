import { resolve, basename } from 'path';

import { unlink } from 'fs';

import { promisify } from 'util';

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import debug from 'debug';
import { Express } from 'express';

import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';

import { FileCategory } from '@hb/types';

import { Storage } from './interfaces';
import { FileEntity } from './entities';
import { FileDto } from './dto';
import { BucketStorage, EncodeStorage } from './storages';

const log = debug('@hb/back:storage');
const unlinkAsync = promisify(unlink);

@Injectable()
export class StorageService {
  private storage: Storage;

  constructor(
    @InjectRepository(FileEntity)
    private readonly fileRepo: Repository<FileEntity>,
    private readonly configService: ConfigService,
    private readonly connection: Connection,
  ) {}

  async onModuleInit() {
    log('Init service');
    const useS3 = this.configService.get<boolean>('S3', false);

    if (useS3) {
      log('Init bucket storage');
      this.storage = new BucketStorage({
        accessKey: this.configService.get('S3_ACCESS_KEY'),
        secretAccessKey: this.configService.get('S3_SECRET_ACCESS_KEY'),
        url: this.configService.get('S3_URL'),
        bucket: this.configService.get('S3_BUCKET'),
      });

      await this.storage.init();
    } else {
      log('Init encode storage');
      this.storage = new EncodeStorage();
    }
  }

  async add(
    fileOrFiles: Express.Multer.File | Express.Multer.File[],
    {
      userId = null,
      category = FileCategory.etc,
    }: { userId?: number; category?: FileCategory } = {},
  ): Promise<FileDto[]> {
    const files = [].concat(fileOrFiles) as Express.Multer.File[];

    const fileNames = files.map(({ originalname }) => originalname);
    log(`Upload files ${fileNames.join(', ')}`);

    return Promise.all(
      files.map(async ({ originalname, path, mimetype }) => {
        const fullPath = resolve(path);
        const key = `${basename(path)}-${originalname}`;
        log(`Upload file ${originalname}`);

        log(`Upload to storage ${key}`);
        const url = await this.storage.add(
          {
            path: fullPath,
            key,
            mimetype,
          },
          category,
        );

        const fileRaw = this.fileRepo.create({
          name: originalname,
          key,
          url,
          category,
          uploadedBy: { id: userId },
        });

        const queryRunner = this.connection.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();
        log(`Start transaction ${originalname}`);

        try {
          const [file] = await Promise.all([
            queryRunner.manager.save(fileRaw, { reload: true }),
            unlinkAsync(fullPath),
          ]);

          await queryRunner.commitTransaction();

          delete file.uploadedBy;
          delete file.key;

          return file;
        } catch (err) {
          log(`Transaction error ${originalname}`, err);
          await queryRunner.rollbackTransaction();
          throw err;
        } finally {
          await queryRunner.release();
        }
      }),
    );
  }
}

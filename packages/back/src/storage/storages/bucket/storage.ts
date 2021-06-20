import { S3 } from 'aws-sdk';
import { createReadStream } from 'fs';
import debug from 'debug';

import { Storage, UploadFile } from '../../interfaces';

import { getS3 } from './s3';

const log = debug('@hb/back:storage/bucket');

export interface BucketStorageOptions {
  accessKey: string;
  secretAccessKey: string;
  url: string;
  bucket: string;
}

export class BucketStorage implements Storage {
  private readonly s3: S3;
  private readonly bucket: string;

  constructor({
    accessKey,
    secretAccessKey,
    url,
    bucket,
  }: BucketStorageOptions) {
    log('Init S3');

    this.s3 = getS3({
      accessKey: accessKey,
      secretAccessKey: secretAccessKey,
      url,
    });
    this.bucket = bucket;
  }

  async init() {
    const bucketParams = {
      Bucket: this.bucket,
    };

    log('Check is bucket exist');

    const buckets = await this.s3.listBuckets().promise();
    const isBucketExist = buckets.Buckets.some(
      ({ Name }) => Name === this.bucket,
    );

    if (!isBucketExist) {
      log('Create bucket');

      await this.s3.createBucket(bucketParams).promise();
    }
  }

  getFullFileKey(key: string, category: string) {
    return `${category}/${key}`;
  }

  async add({ path, key, mimetype }: UploadFile, category: string) {
    log(`Upload file: ${key}`);

    const stream = createReadStream(path);
    const params: S3.PutObjectRequest = {
      Bucket: this.bucket,
      ContentType: mimetype,
      Key: this.getFullFileKey(key, category),
      Body: stream,
    };

    const loaded = await this.s3.upload(params).promise();

    return loaded.Location;
  }

  async del(key: string, category: string) {
    log(`Delete file: ${category}/${key}`);

    const params = {
      Bucket: this.bucket,
      Key: this.getFullFileKey(key, category),
    };

    await this.s3.deleteObject(params);

    return true;
  }
}

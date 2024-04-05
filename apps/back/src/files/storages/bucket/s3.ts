import { S3 } from 'aws-sdk';

export const getS3 = ({ accessKey, secretAccessKey, url }) =>
  new S3({
    accessKeyId: accessKey,
    secretAccessKey,
    endpoint: url,
    s3ForcePathStyle: true,
    signatureVersion: 'v4',
  });

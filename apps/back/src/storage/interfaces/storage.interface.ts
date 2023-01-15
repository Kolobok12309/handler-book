import { UploadFile } from './upload-file.interface';

export interface Storage {
  init?();

  add(file: UploadFile, category: string): string | Promise<string>;

  del(key: string, category: string): boolean | Promise<boolean>;
}

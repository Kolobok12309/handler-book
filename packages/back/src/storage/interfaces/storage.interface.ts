import { LoadedFile } from './loaded-file.interface';
import { UploadFile } from './upload-file.interface';

export interface Storage {
  add(file: UploadFile): LoadedFile | Promise<LoadedFile>;

  get?(id: number | string): LoadedFile | Promise<LoadedFile>;

  getAll(): LoadedFile[] | Promise<LoadedFile[]>;

  del(id: number | string): boolean | Promise<boolean>;
}

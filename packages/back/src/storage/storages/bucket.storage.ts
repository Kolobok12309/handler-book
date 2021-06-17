import { Storage, LoadedFile, UploadFile } from '../interfaces';

export class BucketStorage implements Storage {
  add({ path, mimetype }: UploadFile) {
    console.error('Empty method');
    return null as LoadedFile;
  }

  getAll() {
    console.error('Empty method');
    return [];
  }

  del(id: number) {
    console.error('Empty method');
    return true;
  }
}

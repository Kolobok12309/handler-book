import { readFile } from 'fs';
import { promisify } from 'util';

import { Storage, UploadFile } from '../interfaces';

const asyncReadFile = promisify(readFile);

export class EncodeStorage implements Storage {
  async add({ path, mimetype }: UploadFile) {
    const encoded = await asyncReadFile(path, { encoding: 'base64' });

    const dataUrl = `data:${mimetype};base64,${encoded}`;

    return {
      url: dataUrl,
    };
  }

  getAll() {
    return [];
  }

  del() {
    return true;
  }
}

import { File } from '../files';

export interface Person {
  id: number;

  fullname: string;

  email: string;

  phone: string;

  description: string;

  avatar?: File;
}

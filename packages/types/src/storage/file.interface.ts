import { FileCategory } from './file-category.interface';

export interface File {
  id: number;

  url: string;

  category: FileCategory;

  name: string;

  createdAt: Date;
};

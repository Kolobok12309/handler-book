import { FileCategory } from './file-category.interface';

/**
 * Загруженный файл
 */
export interface File {
  id: number;

  /**
   * Ссылка на файл
   */
  url: string;

  /**
   * Категория файла (аватар собаки, аватар юзера, картинка из описания собаки итд)
   */
  category: FileCategory;

  /**
   * Название файла
   */
  name: string;

  /**
   * Дата загрузки
   */
  createdAt: Date;
};

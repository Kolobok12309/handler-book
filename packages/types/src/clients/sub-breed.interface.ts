import { Breed } from './breed.interface';

/**
 * Подгруппа породы (например Корги Кардиган и Корги Пемброк)
 */
export interface SubBreed {
  id: number;

  /**
   * Название
   */
  name: string;

  /**
   * Родительская порода
   */
  breed?: Breed;
}

import { Breed } from './breed.interface';

/**
 * Породная группа (ркф)
 */
export interface BreedGroup {
  id: number;

  /**
   * Название
   */
  name: string;

  /**
   * Номер (ркф)
   */
  fci: number;

  /**
   * Список включенных пород
   */
  breeds?: Breed[];
}

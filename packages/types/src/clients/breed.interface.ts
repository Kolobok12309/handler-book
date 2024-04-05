import { BreedGroup } from './breed-group.interfaces';
import { SubBreed } from './sub-breed.interface';

/**
 * Порода
 */
export interface Breed {
  id: number;

  /**
   * Название породы
   */
  name: string;

  /**
   * FCI Номер породы
   */
  fci: number;

  /**
   * Группа (ркф)
   */
  group?: BreedGroup;

  /**
   * Id группы
   */
  groupId: number;

  /**
   * Подгруппа
   */
  subgroups: SubBreed[];
}

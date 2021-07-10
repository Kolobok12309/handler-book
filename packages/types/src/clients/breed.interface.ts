import { BreedGroup } from './breed-group.interfaces';
import { SubBreed } from './sub-breed.interface';

export interface Breed {
  id: number;

  name: string;

  fci: number;

  group?: BreedGroup;

  subgroups: SubBreed[];
}

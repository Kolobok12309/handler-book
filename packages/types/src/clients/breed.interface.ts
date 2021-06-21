import { BreedGroup } from './breed-group.interfaces';

export interface Breed {
  id: number;

  name: string;

  fci?: number;

  group?: BreedGroup
}
import { Breed } from './breed.interface';

export interface BreedGroup {
  id: number;

  name: string;

  fci: number;

  breeds?: Breed[];
}

import { Breed } from './breed.interface';

export interface SubBreed {
  id: number;

  name: string;

  breed?: Breed;
}

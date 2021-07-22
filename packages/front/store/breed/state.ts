import { Breed, BreedGroup } from '@hb/types';

export interface BreedState {
  breedGroups: BreedGroup[];
  breeds: Breed[];
}

export default () =>
  ({
    breedGroups: [],
    breeds: [],
  } as BreedState);

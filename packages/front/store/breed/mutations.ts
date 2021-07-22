import { MutationTree } from 'vuex';

import { Breed, BreedGroup } from '@hb/types';

import { BreedState } from './state';

export default {
  setBreeds(state, breeds: Breed[] = []) {
    state.breeds = breeds;
  },

  setBreedGroups(state, breedGroups: BreedGroup[] = []) {
    state.breedGroups = breedGroups;
  },

  addBreedGroup({ breedGroups }, breedGroup: BreedGroup) {
    breedGroups.push(breedGroup);
  },

  updateBreedGroup({ breedGroups }, breedGroup: BreedGroup) {
    const groupId = breedGroup.id;

    const index = breedGroups.findIndex(({ id }) => id === groupId);

    if (~index) breedGroups.splice(index, 1, breedGroup);
    else breedGroups.push(breedGroup);
  },

  deleteBreedGroup({ breedGroups }, groupId: number) {
    const index = breedGroups.findIndex(({ id }) => id === groupId);

    if (~index) breedGroups.splice(index, 1);
  },

  addBreed({ breeds }, breed: Breed) {
    breeds.push(breed);
  },

  updateBreed({ breeds }, breed: Breed) {
    const breedId = breed.id;

    const index = breeds.findIndex(({ id }) => id === breedId);

    if (~index) breeds.splice(index, 1, breed);
    else breeds.push(breed);
  },

  deleteBreed({ breeds }, breedId: number) {
    const index = breeds.findIndex(({ id }) => id === breedId);

    if (~index) breeds.splice(index, 1);
  },
} as MutationTree<BreedState>;

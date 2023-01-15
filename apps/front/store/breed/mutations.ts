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

  deleteBreedGroup(state, groupId: number) {
    const index = state.breedGroups.findIndex(({ id }) => id === groupId);

    if (~index) state.breedGroups.splice(index, 1);
    state.breeds = state.breeds.filter((breed) => breed.groupId !== groupId);
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

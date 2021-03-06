import { GetterTree } from 'vuex';

import { Breed, SubBreed, BreedGroup } from '@hb/types';

import { BreedState } from './state';

export default {
  linkedItems({ breedGroups, breeds }) {
    const linkedGroups: BreedGroup[] = breedGroups.map((group) => ({
      breeds: [],
      ...group,
    }));
    const linkedBreeds: Breed[] = breeds.map((breed) => ({
      ...breed,
      group: linkedGroups.find(({ id }) => id === breed.groupId),
    }));

    linkedGroups.forEach((breedGroup) => {
      breedGroup.breeds = linkedBreeds.filter(
        ({ group }) => group === breedGroup,
      );
    });

    return {
      linkedGroups,
      linkedBreeds,
    };
  },

  breedGroups(_, { linkedItems }): BreedGroup[] {
    return linkedItems.linkedGroups;
  },

  breeds(_, { linkedItems }): Breed[] {
    return linkedItems.linkedBreeds;
  },

  subBreeds(_, { breeds }): SubBreed[] {
    return breeds.reduce((acc, breed) =>
      acc.concat(breed.subgroups.map((subGroups) => ({ ...subGroups, breed })))
    , []);
  },

  breedGroupById(_, { breedGroups }): { [key: number]: BreedGroup } {
    return breedGroups.reduce((acc, breedGroup) => {
      acc[breedGroup.id] = breedGroup;

      return acc;
    }, {});
  },

  breedById(_, { breeds }): { [key: number]: Breed } {
    return breeds.reduce((acc, breed) => {
      acc[breed.id] = breed;

      return acc;
    }, {});
  },
} as GetterTree<BreedState, any>;

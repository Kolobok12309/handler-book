import { ActionTree } from 'vuex';

import {
  BreedGroupDto,
  CreateBreedGroupDto,
  BreedDto,
  CreateBreedDto,
} from '@hb/back/src/clients/dto';

import {
  getBreedGroups,
  addBreedGroup,
  updateBreedGroup,
  deleteBreedGroup,
  getBreeds,
  addBreed,
  updateBreed,
  deleteBreed,
} from '@/api/breed';

import { BreedState } from './state';

export default {
  async nuxtClientInit({ dispatch }) {
    await Promise.all([dispatch('loadBreedGroups'), dispatch('loadBreeds')]);
  },

  async loadBreedGroups({ state, commit }, force = false) {
    if (state.breedGroups.length && !force) return;

    const breedGroups = await getBreedGroups(this.$axios);

    commit('setBreedGroups', breedGroups);
  },

  async loadBreeds({ state, commit }, force = false) {
    if (state.breeds.length && !force) return;

    const breeds = await getBreeds(this.$axios);

    commit('setBreeds', breeds);
  },

  async addBreedGroup({ commit }, body: CreateBreedGroupDto) {
    const breedGroup = await addBreedGroup(this.$axios, body);

    commit('addBreedGroup', breedGroup);

    return breedGroup;
  },

  async updateBreedGroup({ commit }, { id, ...body }: BreedGroupDto) {
    const breedGroup = await updateBreedGroup(this.$axios, id, body);

    commit('updateBreedGroup', breedGroup);

    return breedGroup;
  },

  async deleteBreedGroup({ commit }, id: number) {
    await deleteBreedGroup(this.$axios, id);

    commit('deleteBreedGroup', id);
  },

  async addBreed({ commit }, body: CreateBreedDto) {
    const breed = await addBreed(this.$axios, body);

    commit('addBreed', breed);

    return breed;
  },

  async updateBreed({ commit }, { id, ...body }: BreedDto) {
    const breed = await updateBreed(this.$axios, id, body);

    commit('updateBreed', breed);

    return breed;
  },

  async deleteBreed({ commit }, id: number) {
    await deleteBreed(this.$axios, id);

    commit('deleteBreed', id);
  },
} as ActionTree<BreedState, any>;

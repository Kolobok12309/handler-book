import { ActionTree } from 'vuex';

export default {
  async nuxtClientInit({ dispatch }, context) {
    await Promise.all([dispatch('user/nuxtClientInit', context)]);
  },
} as ActionTree<void, any>;

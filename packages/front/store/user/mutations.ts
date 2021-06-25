import { MutationTree } from 'vuex';

import { User } from '@hb/types';

import { UserState } from './state';

export default {
  setTokens(
    state,
    {
      accessToken = null,
      refreshToken = null,
    }: {
      accessToken?: string;
      refreshToken?: string;
    } = {},
  ) {
    state.accessToken = accessToken;
    state.refreshToken = refreshToken;
  },

  setUser(state, user: Omit<User, 'password'>) {
    state.user = user;
  },

  setRefreshPromise(
    state,
    promise: Promise<{ accessToken: string; refreshToken: string }> = null,
  ) {
    state.refreshPromise = promise;
  },
} as MutationTree<UserState>;

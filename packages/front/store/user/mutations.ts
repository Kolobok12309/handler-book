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

  setUser(
    state,
    {
      id = null,
      name = null,
      email = null,
      role = null,
      createdAt = null,
    }: Omit<User, 'password'> = {} as User,
  ) {
    state.user = {
      id,
      name,
      email,
      role,
      createdAt,
    };
  },

  setRefreshPromise(
    state,
    promise: Promise<{ accessToken: string; refreshToken: string }> = null,
  ) {
    state.refreshPromise = promise;
  },
} as MutationTree<UserState>;

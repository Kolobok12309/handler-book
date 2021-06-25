import { ActionTree } from 'vuex';

import { SignInDto, SignUpDto } from '@hb/back/src/users/dto';

import {
  signUp,
  signIn,
  signOut,
  getSelf,
  refreshToken as refreshTokenApi,
} from '@/api/user';

import { UserState } from './state';

const ACCESS_TOKEN_STORAGE = 'access_token';
const REFRESH_TOKEN_STORAGE = 'refresh_token';
const TOKEN_TYPE = 'Bearer';

export default {
  async nuxtClientInit({ dispatch }) {
    const accessToken = window.localStorage.getItem(ACCESS_TOKEN_STORAGE);
    const refreshToken = window.localStorage.getItem(REFRESH_TOKEN_STORAGE);

    if (accessToken || refreshToken) {
      try {
        dispatch('setTokens', { accessToken, refreshToken });

        await dispatch('loadUser');
      } catch (err) {
        dispatch('setTokens');
      }
    }
  },

  async signUp({ commit, dispatch }, body: SignUpDto) {
    const user = await signUp(this.$axios, body);
    const { accessToken, refreshToken } = await signIn(this.$axios, {
      email: body.email,
      password: body.password,
    });

    dispatch('setTokens', { accessToken, refreshToken });
    commit('setUser', user);
  },

  async signIn({ dispatch }, body: SignInDto) {
    const { accessToken, refreshToken } = await signIn(this.$axios, body);

    dispatch('setTokens', { accessToken, refreshToken });

    return dispatch('loadUser');
  },

  async loadUser({ commit }) {
    const user = await getSelf(this.$axios);

    commit('setUser', user);

    return user;
  },

  refreshToken({ state, dispatch }) {
    const { refreshToken, refreshPromise } = state;

    if (refreshPromise) return refreshPromise;

    const promise = (async () => {
      const { accessToken, refreshToken: newRefreshToken } =
        await refreshTokenApi(this.$axios, refreshToken);

      dispatch('setTokens', { accessToken, refreshToken: newRefreshToken });

      return {
        accessToken,
        refreshToken: newRefreshToken,
      };
    })();

    return promise;
  },

  async quit({ dispatch, commit }) {
    await signOut(this.$axios);

    dispatch('setTokens');
    commit('setUser');
  },

  setTokens(
    { commit },
    {
      accessToken,
      refreshToken,
    }: {
      accessToken?: string;
      refreshToken?: string;
    } = {},
  ) {
    commit('setTokens', { accessToken, refreshToken });

    if (accessToken) {
      window.localStorage.setItem(ACCESS_TOKEN_STORAGE, accessToken);
      this.$axios.setToken(accessToken, TOKEN_TYPE);
    } else {
      window.localStorage.removeItem(ACCESS_TOKEN_STORAGE);
      this.$axios.setToken(false);
    }

    if (refreshToken) {
      window.localStorage.setItem(REFRESH_TOKEN_STORAGE, refreshToken);
    } else {
      window.localStorage.removeItem(REFRESH_TOKEN_STORAGE);
    }
  },
} as ActionTree<UserState, any>;

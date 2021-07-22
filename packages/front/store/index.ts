import debug from '@/services/log';

const actionLogger = debug('store-action');
const mutationLogger = debug('store-mutation');

export const plugins = [
  (store) => {
    store.subscribeAction((action) => {
      actionLogger(action.type, action.payload);
    });

    store.subscribe((mutation) => {
      mutationLogger(mutation.type, mutation.payload);
    });
  },
];

export const state = () => ({});

const root = { root: true };

export const actions = {
  async nuxtClientInit({ dispatch }, context) {
    await Promise.all([
      dispatch('user/nuxtClientInit', context, root),
      dispatch('breed/nuxtClientInit', context, root),
    ]);
  },
};

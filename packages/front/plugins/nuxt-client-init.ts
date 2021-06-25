import debug from '@/services/log';

const log = debug('client-init');

export default async (context) => {
  log('Start');

  await context.store.dispatch('nuxtClientInit', context);

  log('End');
};

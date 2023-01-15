import debug from '@/services/log';

const log = debug('client-init');

export default async (context) => {
  log('Start');

  try {
    await context.store.dispatch('nuxtClientInit', context);
  } catch (err) {
    log('Error', err);
    context.$toast.error('Ошибка инициализации приложения', err.serverError);
  }

  log('End');
};

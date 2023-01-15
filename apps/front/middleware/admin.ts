export default function ({ store, error }) {
  if (store.getters['user/isAdmin']) return;

  return error({ statusCode: 404, message: 'Страница не найдена' });
}

export default function ({ store, redirect }) {
  if (!store.getters['user/isGuest']) return;
  return redirect('/');
}

import axios from 'axios';

import debug from '@/services/log';

const log = debug('axios');
const errLog = debug('axios-error');

const isRefreshTokenExpired = (token) => {
  try {
    const [, encodedPayload] = token.split('.');

    const payload = JSON.parse(atob(encodedPayload));
    const now = Date.now();

    return payload.exp * 1000 < now;
  } catch (err) {
    return true;
  }
};

export default function ({ $axios, redirect, store }) {
  $axios.onRequest((config) => {
    config.progress = false;
    const shortUrl = config.url.replace(config.baseURL, '');
    if (config.data) log(`⇢ ${config.method} ${shortUrl}`, config.data);
    if (config.params) log(`⇢ ${config.method} ${shortUrl}`, config.params);
    else log(`⇢ ${config.method} ${shortUrl}`);
  });

  $axios.onResponse(({ config, data }) => {
    const shortUrl = config.url.replace(config.baseURL, '');
    const methodAndUrl = `${config.method} ${shortUrl.slice(1)}`;

    log(`↞ ${methodAndUrl}`, data);
  });

  $axios.onError(async (err) => {
    if (axios.isCancel(err)) return err;

    let serverError = null;
    const config = err.config || {};
    const response = err.response || {};
    const data = response.data || {};
    const isRefreshRequest = config.isRefresh;

    if (typeof data.message === 'string') serverError = data.message;
    else if (Array.isArray(data.message)) serverError = data.message.join(', ');
    else if (data.error) serverError = data.error;

    if (response.status === 401) {
      const { refreshToken } = store.state.user;

      if (
        isRefreshRequest ||
        !refreshToken ||
        isRefreshTokenExpired(refreshToken)
      ) {
        store.dispatch('user/setTokens');
        store.commit('user/setUser');

        redirect('/signUp');
      } else {
        try {
          await store.dispatch('user/refreshToken');

          return $axios.request(config);
        } catch (err) {
          store.dispatch('user/setTokens');
          store.commit('user/setUser');

          redirect('/signIn');
        }
      }
    }

    const info = {
      path: config.url,
      method: config.method,
      requestData: config.data,
      statusCode: response.status,
      statusText: response.statusText,
      serverError,
      data,
    };

    errLog(info);

    return Promise.reject(info);
  });
}

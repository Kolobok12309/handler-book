import { User } from '@hb/types';

export interface UserState {
  user: Omit<User, 'password'>;

  accessToken: string;
  refreshToken: string;

  refreshPromise: Promise<{ accessToken: string; refreshToken: string }>;
}

export default () =>
  ({
    user: {
      id: null,
      name: null,
      email: null,
      role: null,
      createdAt: null,
    },

    accessToken: null,
    refreshToken: null,

    refreshPromise: null,
  } as UserState);

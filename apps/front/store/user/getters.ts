import { GetterTree } from 'vuex';

import { Role } from '@hb/types';

import { UserState } from './state';

export default {
  isAdmin: ({ user }) => user.role === Role.Admin,
  isUser: ({ user }) => user.role === Role.User,
  isGuest: ({ accessToken }) => accessToken === null,
  can:
    ({ user }) =>
    (roles: Role[] | Role) =>
      [].concat(roles).includes(user.role),
} as GetterTree<UserState, any>;

import { SignInDto, SignUpDto } from '@hb/back/src/users/dto';
// import {
//   AuthController,
//   UsersController,
// } from '@hb/back/src/users/controllers';

export const signIn = ({ $post }, body: SignInDto) => $post('/signIn', body); // as ReturnType<AuthController['signIn']>;

export const signUp = ({ $post }, body: SignUpDto) => $post('/signUp', body); // as ReturnType<AuthController['signUp']>;

export const signOut = ({ $post }) => $post('/signOut'); // as ReturnType<AuthController['signOut']>;

export const refreshToken = ({ $post }, token: string) =>
  $post('/refresh', { refresh_token: token }, { isRefresh: true }); // as ReturnType<AuthController['refreshToken']>;

export const getTokens = ({ $get }) => $get('/tokens'); // as ReturnType<AuthController['getTokens']>;

export const getUserTokens = ({ $get }, userId: number) =>
  $get(`/tokens/${userId}`); // as ReturnType<AuthController['getUserTokens']>;

export const revokeToken = ({ $delete }, tokenId: number) =>
  $delete(`/tokens/${tokenId}`); // as ReturnType<AuthController['revokeToken']>;

export const getSelf = ({ $get }) => $get('/user/self'); // as ReturnType<UsersController['getSelf']>;

export const getUser = ({ $get }, id) => $get(`/user/${id}`); // as ReturnType<UsersController['findOne']>;

// export const updateUser = ({ $patch }, id, body) => $patch(`/user/${id}`, body);

// export const changePassword = ({ $patch }, id, password, oldPassword) =>
//   $patch(`/user/${id}/password`, { password, oldPassword });

// export const deleteUser = ({ $delete }, id) => $delete(`/user/${id}`);

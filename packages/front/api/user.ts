import {
  SignInDto,
  SignUpDto,
  UserDto,
  TokenDto,
} from '@hb/back/src/users/dto';

export const signIn = ({ $post }, body: SignInDto) =>
  $post('/signIn', body) as Promise<{
    accessToken: string;
    refreshToken: string;
  }>;

export const signUp = ({ $post }, body: SignUpDto) =>
  $post('/signUp', body) as Promise<UserDto>;

export const signOut = ({ $post }) => $post('/signOut') as Promise<void>;

export const refreshToken = ({ $post }, token: string) =>
  $post('/refresh', { refresh_token: token }, { isRefresh: true }) as Promise<{
    accessToken: string;
    refreshToken: string;
  }>;

export const getTokens = ({ $get }) => $get('/tokens') as Promise<TokenDto[]>;

export const getUserTokens = ({ $get }, userId: number) =>
  $get(`/tokens/${userId}`) as Promise<TokenDto[]>;

export const revokeToken = ({ $delete }, tokenId: number) =>
  $delete(`/tokens/${tokenId}`) as Promise<void>;

export const getSelf = ({ $get }) => $get('/user/self') as Promise<UserDto>;

export const getUser = ({ $get }, id) =>
  $get(`/user/${id}`) as Promise<UserDto>;

// export const updateUser = ({ $patch }, id, body) => $patch(`/user/${id}`, body);

// export const changePassword = ({ $patch }, id, password, oldPassword) =>
//   $patch(`/user/${id}/password`, { password, oldPassword });

// export const deleteUser = ({ $delete }, id) => $delete(`/user/${id}`);

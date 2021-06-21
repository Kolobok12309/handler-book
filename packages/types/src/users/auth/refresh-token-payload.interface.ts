import { TokenPayload } from './token-payload.interface';

export interface RefreshTokenPayload extends Pick<TokenPayload, 'id' | 'type'> {}
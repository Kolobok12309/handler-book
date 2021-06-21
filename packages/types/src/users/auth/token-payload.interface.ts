import { TokenUser } from './token-user.interface';

export interface TokenPayload extends TokenUser {
  type: string;
}
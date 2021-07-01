import { User } from '../user.interface';

export interface Token {
  id: number;

  user?: Omit<User, 'password'>;

  userId: number;

  userAgent?: string;

  ip?: string;

  createdAt: Date;
}

import { User } from '../user.interface';

export type TokenUser = Pick<User, 'id' | 'role' | 'email'>;
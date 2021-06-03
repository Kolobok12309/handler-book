import { Role } from '../..';

export interface TokenUser {
  id: number;
  role: Role;
  email: string;
}

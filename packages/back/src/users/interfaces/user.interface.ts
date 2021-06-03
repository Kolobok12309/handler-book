import { Role } from './role.interface';

export interface User {
  id: number;

  name: string;

  email: string;

  password: string;

  role: Role;

  createdAt: Date;
}

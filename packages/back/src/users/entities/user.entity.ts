import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

import { Role, User } from '@hb/types';

@Entity('users', {
  orderBy: {
    id: 'DESC',
    name: 'ASC',
  },
})
export class UserEntity implements User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ default: Role.User, type: 'integer' })
  role: Role;

  @CreateDateColumn()
  createdAt: Date;
}

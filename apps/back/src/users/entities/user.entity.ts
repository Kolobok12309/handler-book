import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';

import { Role, User } from '@hb/types';

import { FileEntity } from '@/files/entities';

import { RefreshTokenEntity } from './refresh-token.entity';

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

  @OneToMany(() => RefreshTokenEntity, (token) => token.user)
  tokens: RefreshTokenEntity[];

  @OneToMany(() => FileEntity, (file) => file.uploadedBy)
  files: FileEntity[];
}

import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  Index,
} from 'typeorm';

import { Token } from '@hb/types';

import { UserEntity } from './user.entity';

@Entity('refresh_token', {
  orderBy: {
    createdAt: 'DESC',
  },
})
export class RefreshTokenEntity implements Token {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, (user) => user.tokens, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'userId' })
  user: UserEntity;

  @Index()
  @Column()
  userId: number;

  @Column({ nullable: true })
  userAgent?: string;

  @Column({ nullable: true })
  ip?: string;

  @CreateDateColumn()
  createdAt: Date;
}

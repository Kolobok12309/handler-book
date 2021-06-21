import {
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToOne,
  Entity,
} from 'typeorm';

import { Person } from '@hb/types';

import { FileEntity } from '@/storage';
import { UserEntity } from '@/users';

@Entity('persons', {
  orderBy: {
    id: 'DESC',
    fullname: 'ASC',
  },
})
export class PersonEntity implements Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  isClient: boolean;

  @Column({ default: false })
  isJudge: boolean;

  @Column({ default: false })
  isBreeder: boolean;

  @Column()
  fullname: string;

  @OneToOne(() => FileEntity, {
    onDelete: 'SET NULL',
  })
  avatar: FileEntity;

  @Column({ default: '' })
  description: string;

  @Column({ default: '' })
  email: string;

  @Column({ default: '' })
  phone: string;

  @ManyToOne(() => UserEntity, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'handlerId' })
  handler: UserEntity;
}

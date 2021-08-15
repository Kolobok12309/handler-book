import {
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  ManyToOne,
  ManyToMany,
  JoinTable,
  Entity,
} from 'typeorm';

import { Dog, Sex } from '@hb/types';

import { UserEntity } from '@/users';
import { FileEntity } from '@/storage';

import { PersonEntity } from '../../entities';
import { BreedEntity } from '../breed';

@Entity('dogs', {
  orderBy: {
    id: 'DESC',
    name: 'ASC',
  },
})
export class DogEntity implements Omit<Dog, 'titles' | 'class' | 'shows'> {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  fullname: string;

  @Column()
  name: string;

  @Column()
  birthday: Date;

  @ManyToOne(() => BreedEntity, {
    onDelete: 'SET NULL',
    nullable: true,
  })
  breed: BreedEntity;

  breedId: number;

  @OneToOne(() => FileEntity, {
    onDelete: 'SET NULL',
    nullable: true,
  })
  avatar: FileEntity;

  @ManyToOne(() => PersonEntity, {
    onDelete: 'SET NULL',
    nullable: true,
  })
  breeder: PersonEntity;

  @Column({ default: '' })
  color: string;

  @Column({ default: '' })
  description: string;

  // TODO Mb replace it to OneToMany and update FileEntity
  // Not OneToMany, because typeorm not support
  // id's array in entity
  @ManyToMany(() => FileEntity)
  @JoinTable()
  files: FileEntity[];

  @ManyToOne(() => PersonEntity, {
    onDelete: 'CASCADE',
  })
  owner: PersonEntity;

  @ManyToOne(() => UserEntity, {
    onDelete: 'CASCADE',
  })
  handler: UserEntity;

  @Column({ type: 'int2' })
  sex: Sex;

  @Column({ type: 'float', nullable: true })
  weight: number;
}

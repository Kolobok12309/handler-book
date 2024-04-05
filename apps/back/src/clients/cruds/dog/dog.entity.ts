import {
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  ManyToOne,
  ManyToMany,
  JoinTable,
  Entity,
  JoinColumn,
  AfterLoad,
} from 'typeorm';

import { Dog, Sex } from '@hb/types';

import { UserEntity } from '@/users';
import { FileEntity } from '@/files';

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

  @Column({ length: 200, nullable: false })
  name: string;

  @Column()
  birthday: Date;

  @Column({ default: '' })
  color: string;

  @Column({ default: '' })
  description: string;

  @Column({ type: 'int2' })
  sex: Sex;

  @Column({ type: 'float', nullable: true })
  weight: number;

  @Column()
  breedId: number;

  @Column({ nullable: true })
  avatarId?: number;

  @Column({ nullable: true })
  breederId?: number;

  @AfterLoad()
  setFileIds() {
    this.filesIds = (this.files || []).map(({ id }) => id);
  }

  filesIds?: number[];

  @Column({ nullable: true })
  ownerId?: number;

  @Column({ nullable: true })
  handlerId?: number;

  // Relations

  @ManyToOne(() => BreedEntity, {
    onDelete: 'SET NULL',
    nullable: true,
  })
  breed: BreedEntity;

  @OneToOne(() => FileEntity, {
    onDelete: 'SET NULL',
    nullable: true,
    eager: true,
  })
  @JoinColumn()
  avatar: FileEntity;

  // TODO Mb replace it to OneToMany and update FileEntity
  // Not OneToMany, because typeorm not support
  // id's array in entity
  @ManyToMany(() => FileEntity, {
    eager: true,
  })
  @JoinTable()
  files: FileEntity[];

  @ManyToOne(() => UserEntity, {
    onDelete: 'CASCADE',
  })
  handler: UserEntity;
}

import {
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import { Dog, Sex } from '@hb/types';

import { UserEntity } from '@/users';
import { FileEntity } from '@/storage';
import { PersonEntity } from './person.entity';
import { BreedEntity } from './breed.entity';

export class DogEntity implements Exclude<Dog, 'titles' | 'class' | 'shows'> {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  fullname?: string;

  @Column()
  name: string;

  @Column()
  birthday: Date;

  @ManyToOne(() => BreedEntity, {
    onDelete: 'SET NULL',
    nullable: true,
  })
  breed?: BreedEntity;

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

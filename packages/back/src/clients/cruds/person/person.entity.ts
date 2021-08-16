import {
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToOne,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
} from 'typeorm';

import { Person } from '@hb/types';

import { FileEntity } from '@/storage';
import { UserEntity } from '@/users';

import { DogEntity } from '../dog/dog.entity';

@Entity('persons', {
  orderBy: {
    id: 'DESC',
    fullname: 'ASC',
  },
})
export class PersonEntity implements Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullname: string;

  @OneToOne(() => FileEntity, {
    onDelete: 'SET NULL',
    eager: true,
  })
  @JoinColumn()
  avatar: FileEntity;

  @Column({ default: '' })
  description: string;

  @Column({ default: '' })
  email: string;

  @Column({ default: '' })
  phone: string;

  @ManyToMany(() => FileEntity)
  @JoinTable()
  files: FileEntity[];

  @OneToMany(() => DogEntity, (dog) => dog.owner)
  ownedDogs: DogEntity[];

  @OneToMany(() => DogEntity, (dog) => dog.breeder)
  breededDogs: DogEntity[];

  @ManyToOne(() => UserEntity, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'handlerId' })
  handler: UserEntity;
}

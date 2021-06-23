import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { BreedGroup } from '@hb/types';

import { BreedEntity } from './breed.entity';

@Entity('breed-groups', {
  orderBy: {
    id: 'DESC',
    name: 'ASC',
  },
})
export class BreedGroupEntity implements BreedGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
    nullable: true,
  })
  fci: number;

  @Column()
  name: string;

  @OneToMany(() => BreedEntity, (breed) => breed.group)
  breeds?: BreedEntity[];
}

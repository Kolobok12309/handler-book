import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';

import { Breed } from '@hb/types';

import { BreedGroupEntity } from './breed-group.entity';
import { SubBreedEntity } from './sub-breed.entity';

@Entity('breeds', {
  orderBy: {
    id: 'ASC',
    name: 'ASC',
  },
})
export class BreedEntity implements Breed {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    unique: true,
    nullable: true,
  })
  fci: number;

  @ManyToOne(() => BreedGroupEntity, (group) => group.breeds, {
    onDelete: 'CASCADE',
  })
  group?: BreedGroupEntity;

  @RelationId((breed: BreedEntity) => breed.group)
  groupId: number;

  @OneToMany(() => SubBreedEntity, (subBreed) => subBreed.breed, {
    eager: true,
    cascade: true,
  })
  subgroups: SubBreedEntity[];
}

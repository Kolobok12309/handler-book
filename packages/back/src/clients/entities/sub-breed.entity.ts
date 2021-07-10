import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';

import { BreedEntity } from './breed.entity';

@Entity('sub-breeds', {
  orderBy: {
    id: 'DESC',
    name: 'ASC',
  },
})
export class SubBreedEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => BreedEntity, (breed) => breed.subgroups, {
    onDelete: 'CASCADE',
  })
  breed?: BreedEntity;

  @RelationId((subBreed: SubBreedEntity) => subBreed.breed)
  breedId: number;
}

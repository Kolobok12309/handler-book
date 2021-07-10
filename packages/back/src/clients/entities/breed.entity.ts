import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';

import { BreedGroupEntity } from './breed-group.entity';
import { SubBreedEntity } from './sub-breed.entity';

@Entity('breeds', {
  orderBy: {
    id: 'DESC',
    name: 'ASC',
  },
})
export class BreedEntity {
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
  })
  subgroups: SubBreedEntity[];
}

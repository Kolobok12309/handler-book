import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';

import { BreedGroupEntity } from './breed-group.entity';

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
    type: 'int',
    unique: true,
    nullable: true,
  })
  fci: number;

  @ManyToOne(() => BreedGroupEntity, (group) => group.breeds, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'groupId' })
  group?: BreedGroupEntity;

  groupId: number;
}

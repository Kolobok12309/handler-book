import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { File, FileCategory } from '@hb/types';

import { UserEntity } from '@/users/entities';

@Entity('files')
export class FileEntity implements File {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: FileCategory.etc, type: 'text' })
  category: FileCategory;

  @Column()
  key: string;

  @Column()
  url: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.files, {
    onDelete: 'SET NULL',
    nullable: true,
  })
  @JoinColumn({ name: 'uploadedById' })
  uploadedBy?: UserEntity;
}

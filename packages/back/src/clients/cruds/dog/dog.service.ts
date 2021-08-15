import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { DogEntity } from './dog.entity';

@Injectable()
export class DogService extends TypeOrmCrudService<DogEntity> {
  constructor(
    @InjectRepository(DogEntity)
    readonly repo: Repository<DogEntity>,
  ) {
    super(repo);
  }
}

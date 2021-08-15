import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { BreedEntity } from './entities';

@Injectable()
export class BreedService extends TypeOrmCrudService<BreedEntity> {
  constructor(
    @InjectRepository(BreedEntity)
    readonly repo: Repository<BreedEntity>,
  ) {
    super(repo);
  }
}

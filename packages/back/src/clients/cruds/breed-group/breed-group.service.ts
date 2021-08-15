import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { BreedGroupEntity } from './breed-group.entity';

@Injectable()
export class BreedGroupService extends TypeOrmCrudService<BreedGroupEntity> {
  constructor(
    @InjectRepository(BreedGroupEntity)
    readonly repo: Repository<BreedGroupEntity>,
  ) {
    super(repo);
  }
}

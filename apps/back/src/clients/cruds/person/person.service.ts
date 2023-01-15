import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { PersonEntity } from './person.entity';

@Injectable()
export class PersonService extends TypeOrmCrudService<PersonEntity> {
  constructor(
    @InjectRepository(PersonEntity)
    readonly repo: Repository<PersonEntity>,
  ) {
    super(repo);
  }
}

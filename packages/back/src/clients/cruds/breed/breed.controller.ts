import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

import { Role } from '@hb/types';

import { Auth } from '@/users';

import { CreateBreedDto, UpdateBreedDto } from './dto';
import { BreedService } from './breed.service';
import { BreedEntity } from './entities';

@Crud({
  model: {
    type: BreedEntity,
  },
  dto: {
    create: CreateBreedDto,
    update: UpdateBreedDto,
  },
  routes: {
    only: ['getManyBase', 'createOneBase', 'updateOneBase', 'deleteOneBase'],
    createOneBase: {
      decorators: [Auth(Role.Admin)],
    },
    updateOneBase: {
      decorators: [Auth(Role.Admin)],
    },
    deleteOneBase: {
      decorators: [Auth(Role.Admin)],
    },
  },
  query: {
    join: {
      subgroups: {
        eager: true,
      },
    },
  },
})
@ApiTags('Breed')
@Controller('breed')
export class BreedController implements CrudController<BreedEntity> {
  constructor(public service: BreedService) {}
}

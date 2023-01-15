import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { ApiTags, ApiExtraModels } from '@nestjs/swagger';

import { Role } from '@hb/types';

import { Auth } from '@/users';

import { BreedDto, CreateBreedDto, UpdateBreedDto } from './dto';
import { BreedService } from './breed.service';

@Crud({
  model: {
    type: BreedDto,
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
    alwaysPaginate: false,
  },
})
// TODO Remove it after crud decorator fix `getOneBase` bug
@ApiExtraModels(BreedDto)
@ApiTags('Breed')
@Controller('breed')
export class BreedController implements CrudController<BreedDto> {
  constructor(public service: BreedService) {}
}

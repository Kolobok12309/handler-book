import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { ApiTags, ApiExtraModels } from '@nestjs/swagger';

import { Role } from '@hb/types';

import { Auth } from '@/users';

import { BreedGroupDto, CreateBreedGroupDto, UpdateBreedGroupDto } from './dto';
import { BreedGroupService } from './breed-group.service';

@Crud({
  model: {
    type: BreedGroupDto,
  },
  dto: {
    create: CreateBreedGroupDto,
    update: UpdateBreedGroupDto,
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
    alwaysPaginate: false,
  },
})
// TODO Remove it after crud decorator fix `getOneBase` bug
@ApiExtraModels(BreedGroupDto)
@ApiTags('Breed group')
@Controller('breed-group')
export class BreedGroupController implements CrudController<BreedGroupDto> {
  constructor(public service: BreedGroupService) {}
}

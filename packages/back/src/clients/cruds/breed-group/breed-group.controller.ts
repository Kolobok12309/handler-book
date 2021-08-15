import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

import { Role } from '@hb/types';

import { Auth } from '@/users';

import { CreateBreedGroupDto, UpdateBreedGroupDto } from './dto';
import { BreedGroupService } from './breed-group.service';
import { BreedGroupEntity } from './breed-group.entity';

@Crud({
  model: {
    type: BreedGroupEntity,
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
})
@ApiTags('Breed group')
@Controller('breed-group')
export class BreedGroupController implements CrudController<BreedGroupEntity> {
  constructor(public service: BreedGroupService) {}
}

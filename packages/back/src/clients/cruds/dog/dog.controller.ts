import { Controller } from '@nestjs/common';
import { Crud, CrudController, CrudAuth } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

import { TokenUser, Role } from '@hb/types';

import { Auth } from '@/users';

import { DogDto, CreateDogDto, UpdateDogDto } from './dto';
import { DogService } from './dog.service';

@Crud({
  model: {
    type: DogDto,
  },
  dto: {
    create: CreateDogDto,
    update: UpdateDogDto,
  },
  routes: {
    only: [
      'getOneBase',
      'getManyBase',
      'createOneBase',
      'updateOneBase',
      'deleteOneBase',
    ],
  },
})
@CrudAuth({
  filter: ({ id, role }: TokenUser) => {
    if (role === Role.Admin) return {};

    return {
      'DogEntity.handlerId': id,
    };
  },
})
@ApiTags('Dogs')
@Controller('dogs')
@Auth([Role.User, Role.Admin])
export class DogController implements CrudController<DogDto> {
  constructor(public service: DogService) {}
}

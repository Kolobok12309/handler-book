import { Controller } from '@nestjs/common';
import { Crud, CrudController, CrudAuth } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

import { TokenUser, Role } from '@hb/types';

import { Auth } from '@/users';

import { DogEntity } from './dog.entity';
import { DogService } from './dog.service';

@Crud({
  model: {
    type: DogEntity,
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
export class DogController implements CrudController<DogEntity> {
  constructor(public service: DogService) {}
}

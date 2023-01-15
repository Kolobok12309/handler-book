import { Controller } from '@nestjs/common';
import {
  Crud,
  CrudController,
  CrudAuth,
  Override,
  CrudRequest,
  ParsedBody,
  ParsedRequest,
} from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

import { TokenUser, Role } from '@hb/types';

import { Auth, User } from '@/users';

import { DogDto, EditDogDto } from './dto';
import { DogService } from './dog.service';

@Crud({
  model: {
    type: DogDto,
  },
  dto: {
    create: EditDogDto,
    update: EditDogDto,
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
  query: {
    join: {
      avatar: {
        eager: true,
      },
      breeder: {
        eager: true,
      },
      files: {
        eager: true,
      },
      owner: {
        eager: true,
      },
    },
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

  get base(): CrudController<DogDto> {
    return this;
  }

  @Override()
  createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: EditDogDto,
    @User('id') id: number,
  ) {
    return this.base.createOneBase(req, {
      ...dto,
      handlerId: id,
    });
  }
}

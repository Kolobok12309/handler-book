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

import { PersonDto, EditPersonDto } from './dto';
import { PersonService } from './person.service';

@Crud({
  model: {
    type: PersonDto,
  },
  dto: {
    create: EditPersonDto,
    update: EditPersonDto,
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
    },
  },
})
@CrudAuth({
  filter: ({ id, role }: TokenUser) => {
    if (role === Role.Admin) return {};

    return {
      'PersonEntity.handlerId': id,
    };
  },
})
@ApiTags('Persons')
@Controller('persons')
@Auth([Role.User, Role.Admin])
export class PersonController implements CrudController<PersonDto> {
  constructor(public service: PersonService) {}

  get base(): CrudController<PersonDto> {
    return this;
  }

  @Override()
  createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: EditPersonDto,
    @User('id') id: number,
  ) {
    return this.base.createOneBase(req, {
      ...dto,
      handlerId: id,
    });
  }
}

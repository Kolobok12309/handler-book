import {
  Body,
  Controller,
  Post,
  Get,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import {
  ApiBody,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

import { Role } from '@hb/types';

import { Auth } from '@/users';

import { CreateSubBreedDto, UpdateSubBreedDto } from '../dto';
import { SubBreedService } from '../services';

@ApiTags('SubBreed')
@Controller('sub-breed')
export class BreedGroupController {
  constructor(private readonly subBreedService: SubBreedService) {}

  @Auth([Role.Admin])
  @Post()
  @ApiBody({ type: CreateSubBreedDto })
  @ApiNotFoundResponse()
  add(@Body() createDto: CreateSubBreedDto) {
    return this.subBreedService.add(createDto);
  }

  @Auth([Role.Admin])
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateDto: UpdateSubBreedDto) {
    return this.subBreedService.update(id, updateDto);
  }

  @Auth([Role.Admin])
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.subBreedService.del(id);
  }
}

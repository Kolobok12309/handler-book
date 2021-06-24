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

import { CreateBreedGroupDto, UpdateBreedGroupDto } from '../dto';
import { BreedGroupService } from '../services';

@ApiTags('Breed group')
@Controller('breed-group')
export class BreedGroupController {
  constructor(private readonly breedGroupService: BreedGroupService) {}

  @Auth([Role.Admin])
  @Post()
  @ApiBody({ type: CreateBreedGroupDto })
  @ApiNotFoundResponse()
  async add(@Body() createBreedGroupDto: CreateBreedGroupDto) {
    return this.breedGroupService.add(createBreedGroupDto);
  }

  @Auth([Role.Admin])
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateBreedGroupDto: UpdateBreedGroupDto,
  ) {
    return this.breedGroupService.update(id, updateBreedGroupDto);
  }

  @Auth([Role.Admin])
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.breedGroupService.del(id);
  }

  @Get()
  @ApiOkResponse({ description: 'Get all breed groups' })
  async getAll() {
    return this.breedGroupService.getAll();
  }
}

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

import { CreateBreedDto, UpdateBreedDto } from '../dto';
import { BreedService } from '../services';

@ApiTags('Breed')
@Controller('breed')
export class BreedController {
  constructor(private readonly breedService: BreedService) {}

  @Auth([Role.Admin])
  @Post()
  @ApiBody({ type: CreateBreedDto })
  @ApiNotFoundResponse()
  add(@Body() createBreedDto: CreateBreedDto) {
    return this.breedService.add(createBreedDto);
  }

  @Auth([Role.Admin])
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateBreedDto: UpdateBreedDto) {
    return this.breedService.update(id, updateBreedDto);
  }

  @Auth([Role.Admin])
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.breedService.del(id);
  }

  @Get()
  @ApiOkResponse({ description: 'Get all breeds' })
  getAll() {
    return this.breedService.getAll();
  }
}

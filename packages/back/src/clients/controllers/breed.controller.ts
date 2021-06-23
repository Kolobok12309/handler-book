import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiNotFoundResponse } from '@nestjs/swagger';

import { Role } from '@hb/types';

import { Auth } from '@/users';

import { CreateBreedDto } from '../dto';
import { BreedService } from '../services';

@Controller('breed')
export class BreedController {
  constructor(private readonly breedService: BreedService) {}

  @Auth([Role.Admin])
  @Post()
  @ApiBody({ type: CreateBreedDto })
  @ApiNotFoundResponse()
  async add(@Body() createBreedDto: CreateBreedDto) {
    return this.breedService.add(createBreedDto);
  }
}

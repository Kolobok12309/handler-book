import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import debug from 'debug';

import { UsersService } from '../services';
import { CreateUserDto, UpdateUserDto, UserDto } from '../dto';

const log = debug('@hb/back:users');

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.usersService.create(createUserDto);
  // }

  // @Get()
  // findAll() {
  //   return this.usersService.findAll();
  // }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<UserDto> {
    return this.usersService.findById(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(id, updateUserDto);
  // }

  // @Delete(':id')
  // delete(@Param('id') id: number) {
  //   return this.usersService.delete(id);
  // }
}

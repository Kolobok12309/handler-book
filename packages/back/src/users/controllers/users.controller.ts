import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import debug from 'debug';

import { Role } from '@hb/types';

import { UsersService } from '../services';
import { CreateUserDto, UpdateUserDto, UserDto } from '../dto';
import { Auth, User } from '../decorators';

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
  @Auth([Role.Admin])
  @ApiOkResponse({
    description: 'Get user by id',
  })
  @ApiNotFoundResponse({
    description: 'User not found',
  })
  findOne(@Param('id') id: number): Promise<UserDto> {
    log(`Find user ${id}`);

    return this.usersService.findById(id);
  }

  @Get('self')
  @Auth([Role.Admin, Role.User])
  @ApiOkResponse({
    description: 'Get self user',
  })
  getSelf(@User('id') userId: number): Promise<UserDto> {
    log(`Get self ${userId}`);

    return this.usersService.findById(userId);
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

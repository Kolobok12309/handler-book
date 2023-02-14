import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  MinLength,
  Min,
} from 'class-validator';

import { Role, type User } from '@hb/types';

import { PASS_MIN_LENGTH } from '../user.consts';

export class UserDto implements Partial<User> {
  @IsNumber()
  @ApiProperty({
    description: 'User id',
  })
  id: number;

  @IsString()
  @MaxLength(64)
  @ApiProperty({
    description: 'User name',
  })
  name: string;

  @IsString()
  @IsEmail()
  @ApiProperty({
    description: 'User email',
    format: 'email',
  })
  email: string;

  @IsNumber()
  @IsOptional()
  @Min(Role.User)
  @Max(Role.Admin)
  @ApiProperty({
    description: 'User role',
  })
  role: Role = Role.User;

  @IsString()
  @MinLength(PASS_MIN_LENGTH)
  @ApiProperty({
    minLength: PASS_MIN_LENGTH,
    format: 'password',
  })
  password?: string;

  @ApiProperty({
    description: 'User registration date',
  })
  createdAt: Date;
}

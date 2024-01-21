import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

import { PASS_MIN_LENGTH } from '../user.consts';

import { UserDto } from './user.dto';

export class UpdatePasswordDto extends PickType(UserDto, ['password']) {
  @IsString()
  @MinLength(PASS_MIN_LENGTH)
  @ApiProperty({
    minLength: PASS_MIN_LENGTH,
    format: 'password',
  })
  oldPassword: string;
}

import { ApiProperty } from '@nestjs/swagger';

import { Token } from '@hb/types';

import { UserDto } from './user.dto';

export class TokenDto implements Partial<Token> {
  @ApiProperty({
    description: 'Token id',
  })
  id: number;

  @ApiProperty()
  user?: UserDto;

  @ApiProperty()
  userId: number;

  @ApiProperty()
  userAgent?: string;

  @ApiProperty()
  ip?: string;

  @ApiProperty()
  createdAt: Date;
}

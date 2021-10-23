import { ApiProperty } from '@nestjs/swagger';
import { CrudValidationGroups } from '@nestjsx/crud';

import { Person } from '@hb/types';

import { FileDto } from '@/storage';
import { IsEmpty, IsNotEmpty, IsOptional, IsString, IsNumber, Min } from 'class-validator';

const { CREATE, UPDATE } = CrudValidationGroups;

export class PersonDto implements Person {
  @IsEmpty({ groups: [CREATE, UPDATE] })
  @ApiProperty()
  id: number;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @IsString({ always: true })
  @ApiProperty()
  fullname: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ default: '' })
  email: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ default: '' })
  phone: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ default: '' })
  description: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @ApiProperty()
  avatarId?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @ApiProperty()
  handlerId?: number;

  // Relations

  @ApiProperty()
  avatar?: FileDto;
}

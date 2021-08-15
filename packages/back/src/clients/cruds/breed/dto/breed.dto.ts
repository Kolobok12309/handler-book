import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

import { Breed } from '@hb/types';

import { SubBreedDto } from './sub-breed.dto';

export class BreedDto implements Breed {
  @IsNumber()
  @ApiProperty({
    description: 'Breed id(not fci)',
  })
  id: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({
    description: 'Fci group of breed',
    default: null,
    required: false,
  })
  fci: number;

  @IsString()
  @ApiProperty({
    description: 'Breed name',
  })
  name: string;

  @IsNumber()
  @ApiProperty({
    description: 'Id of breed group',
  })
  groupId: number;

  @ApiProperty({
    description: 'List of subgroups',
  })
  @ValidateNested({ each: true })
  @Type(() => SubBreedDto)
  subgroups: SubBreedDto[];
}

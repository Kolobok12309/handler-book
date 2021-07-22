import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

import { Breed } from '@hb/types';

import { SubBreedDto } from './sub-breed.dto';
import { BreedGroupDto } from './breed-group.dto';

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

  @ApiProperty({
    description: 'Breed group',
    required: false,
  })
  group?: BreedGroupDto;

  @IsNumber()
  @ApiProperty({
    description: 'Id of breed group',
  })
  groupId: number;

  @ApiProperty()
  subgroups: SubBreedDto[];
}

import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

import { Breed } from '@hb/types';

export class BreedDto implements Partial<Breed> {
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
  })
  fci?: number;

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
}

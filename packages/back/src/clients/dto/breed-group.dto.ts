import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

import { BreedGroup } from '@hb/types';

export class BreedGroupDto implements Partial<BreedGroup> {
  @IsNumber()
  @ApiProperty({
    description: 'Breed id(not fci)',
  })
  id: number;

  @IsString()
  @ApiProperty({
    description: 'Breed name',
  })
  name: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty({
    description: 'Fci number of group',
    required: false,
  })
  fci: number;
}

import { IsOptional, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { SubBreed } from '@hb/types';

export class CascadeSubBreedDto implements Partial<Omit<SubBreed, 'breedId'>> {
  @IsNumber()
  @IsOptional()
  @ApiProperty({
    description: 'SubBreed id',
  })
  id?: number;

  @IsString()
  @ApiProperty({
    description: 'SubBreed name',
  })
  name: string;
}

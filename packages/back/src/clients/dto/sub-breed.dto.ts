import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

import { SubBreed } from '@hb/types';

export class SubBreedDto implements Partial<SubBreed> {
  @IsNumber()
  @ApiProperty({
    description: 'SubBreed id',
  })
  id: number;

  @IsString()
  @ApiProperty({
    description: 'SubBreed name',
  })
  name: string;

  @IsNumber()
  @ApiProperty({
    description: 'Id of breed',
  })
  breedId: number;
}

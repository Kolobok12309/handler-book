import { OmitType, ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

import { BreedDto } from './breed.dto';
import { CascadeSubBreedDto } from './cascade-sub-breed.dto';

export class CreateBreedDto extends OmitType(BreedDto, [
  'id',
  'subgroups',
] as const) {
  @ValidateNested({ each: true })
  @Type(() => CascadeSubBreedDto)
  @ApiProperty()
  subgroups: CascadeSubBreedDto[];
}

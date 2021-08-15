import { OmitType, ApiProperty } from '@nestjs/swagger';
import { Min, IsNumber, IsOptional } from 'class-validator';

import { DogDto } from './dog.dto';

export class CreateDogDto extends OmitType(DogDto, ['id', 'owner', 'breeder', 'avatar', 'files'] as const) {
  @IsNumber()
  @Min(0)
  @ApiProperty({
    required: false,
  })
  ownerId?: number;

  @IsNumber()
  @Min(0)
  @IsOptional()
  @ApiProperty({
    required: false,
  })
  breederId?: number;

  @IsNumber()
  @Min(0)
  @IsOptional()
  @ApiProperty({
    required: false,
  })
  avatarId?: number;

  @IsNumber({}, { each: true })
  @Min(0, { each: true })
  @IsOptional()
  @ApiProperty({
    description: 'Array of file id\'s',
    required: false,
  })
  filesIds?: number[];
}

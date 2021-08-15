import { ApiProperty,  } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, IsDateString, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

import { Dog, Sex } from '@hb/types';

import { FileDto } from '@/storage';

import { PersonDto } from '../../person';

export class DogDto implements Omit<Dog, 'titles' | 'class' | 'shows'> {
  @ApiProperty({ description: 'Id of dog' })
  id: number;

  @IsNumber()
  @ApiProperty({
    description: 'Breed id',
  })
  breedId: number;

  @IsString()
  @IsOptional()
  @ApiProperty()
  fullname: string;

  @IsString()
  @ApiProperty()
  name: string;

  @IsDateString()
  @IsOptional()
  @ApiProperty()
  birthday: Date;

  @IsNumber()
  @IsOptional()
  @Min(Sex.Male)
  @Max(Sex.Female)
  @ApiProperty({ enum: Sex })
  sex: Sex;

  @IsNumber()
  @Min(0)
  @Max(200)
  @IsOptional()
  @ApiProperty({
    description: 'Dog weight in kg\'s',
  })
  weight: number;

  @IsString()
  @ApiProperty()
  color: string;

  @ApiProperty()
  @Type(() => PersonDto)
  owner: PersonDto;

  @ApiProperty()
  breeder: PersonDto;

  @IsString()
  @ApiProperty()
  description: string;

  @Type(() => FileDto)
  @ApiProperty()
  avatar: FileDto;

  @Type(() => FileDto)
  @ApiProperty()
  files: FileDto[];
}

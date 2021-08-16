import { ApiProperty, ApiHideProperty } from '@nestjs/swagger';
import { CrudValidationGroups } from '@nestjsx/crud';
import {
  IsDateString,
  IsEmpty,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
  Max,
} from 'class-validator';

import { Dog, Sex } from '@hb/types';

import { FileDto } from '@/storage';

import { PersonDto } from '../../person';

const { CREATE, UPDATE } = CrudValidationGroups;

export class DogDto implements Omit<Dog, 'titles' | 'class' | 'shows'> {
  @IsEmpty({ groups: [CREATE, UPDATE] })
  @ApiProperty({ description: 'Id of dog' })
  id: number;

  @IsOptional()
  @IsString()
  @ApiProperty()
  fullname: string;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @IsString({ always: true })
  @MaxLength(200, { always: true })
  @ApiProperty({ maxLength: 200 })
  name: string;

  @IsOptional()
  @IsDateString()
  @ApiProperty()
  birthday?: Date;

  @IsOptional()
  @IsString()
  @ApiProperty({ default: '' })
  color: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ default: '' })
  description: string;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @IsNumber({}, { always: true })
  @Min(Sex.Male, { always: true })
  @Max(Sex.Female, { always: true })
  @ApiProperty({
    enum: [Sex.Male, Sex.Female],
    minimum: Sex.Male,
    maximum: Sex.Female,
  })
  sex: Sex;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(200)
  @ApiProperty({
    description: "Dog weight in kg's",
  })
  weight: number;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @IsNumber({}, { always: true })
  @Min(0, { always: true })
  @ApiProperty()
  breedId: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @ApiProperty()
  avatarId?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @ApiProperty()
  breederId?: number;

  @IsOptional()
  @IsNumber({}, { each: true })
  @Min(0, { each: true })
  @ApiProperty()
  filesIds?: number[];

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @IsNumber({}, { always: true })
  @Min(0, { always: true })
  @ApiProperty()
  ownerId?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @ApiProperty()
  handlerId?: number;

  // Relations

  @ApiProperty()
  avatar?: FileDto;

  @ApiProperty()
  breeder?: PersonDto;

  @ApiProperty()
  files?: FileDto[];

  @ApiProperty()
  owner?: PersonDto;
}

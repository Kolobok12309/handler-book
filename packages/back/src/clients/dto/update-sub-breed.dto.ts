import { PartialType } from '@nestjs/swagger';

import { CreateSubBreedDto } from './create-sub-breed.dto';

export class UpdateSubBreedDto extends PartialType(CreateSubBreedDto) {}

import { OmitType } from '@nestjs/swagger';

import { SubBreedDto } from './sub-breed.dto';

export class CreateSubBreedDto extends OmitType(SubBreedDto, ['id'] as const) {}

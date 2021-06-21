import { OmitType } from '@nestjs/swagger';

import { BreedDto } from './breed.dto';

export class CreateBreedDto extends OmitType(BreedDto, ['id'] as const) {}

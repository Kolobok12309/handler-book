import { OmitType } from '@nestjs/swagger';

import { BreedDto } from './breed.dto';

export class UpdateBreedDto extends OmitType(BreedDto, ['id'] as const) {}

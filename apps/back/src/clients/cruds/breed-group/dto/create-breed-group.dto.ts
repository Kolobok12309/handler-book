import { OmitType } from '@nestjs/swagger';

import { BreedGroupDto } from './breed-group.dto';

export class CreateBreedGroupDto extends OmitType(BreedGroupDto, [
  'id',
] as const) {}

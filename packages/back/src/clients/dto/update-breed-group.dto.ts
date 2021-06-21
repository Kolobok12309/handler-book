import { OmitType } from '@nestjs/swagger';

import { BreedGroupDto } from './breed-group.dto';

export class UpdateBreedGroupDto extends OmitType(BreedGroupDto, [
  'id',
] as const) {}

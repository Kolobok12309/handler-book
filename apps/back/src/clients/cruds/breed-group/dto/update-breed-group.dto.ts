import { PartialType } from '@nestjs/swagger';

import { CreateBreedGroupDto } from './create-breed-group.dto';

export class UpdateBreedGroupDto extends PartialType(CreateBreedGroupDto) {}

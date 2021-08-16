import { ApiHideProperty, OmitType } from '@nestjs/swagger';

import { DogDto } from './dog.dto';

export class EditDogDto extends OmitType(DogDto, [
  'id',
  'owner',
  'breeder',
  'avatar',
  'files',
] as const) {
  @ApiHideProperty()
  id: number;
}

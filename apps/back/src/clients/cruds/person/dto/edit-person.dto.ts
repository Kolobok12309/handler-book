import { ApiHideProperty, OmitType } from '@nestjs/swagger';

import { PersonDto } from './person.dto';

export class EditPersonDto extends OmitType(PersonDto, [
  'id',
  'avatar',
  'handlerId',
] as const) {
  @ApiHideProperty()
  id: number;

  @ApiHideProperty()
  handlerId?: number;
}

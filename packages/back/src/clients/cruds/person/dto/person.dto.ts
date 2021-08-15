import { Person } from '@hb/types';

import { FileDto } from '@/storage';

export class PersonDto implements Person {
  id: number;

  isClient: boolean;

  isJudge: boolean;

  isBreeder: boolean;

  fullname: string;

  email: string;

  phone: string;

  description: string;

  avatar: FileDto;
}

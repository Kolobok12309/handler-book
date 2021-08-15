import { File } from '../storage';
import { Show } from '../show';

import { Sex } from './sex.interface';
import { Person } from './person.interface';
import { Title } from './title.interface';
import { DogClass } from './dog-class.interface';

export interface Dog {
  id: number;

  breedId: number;

  fullname: string;

  name: string;

  birthday: Date;

  sex: Sex;

  weight: number;

  color: string;

  owner: Person;

  breeder: Person;

  titles: Title[];

  description: string;

  avatar: File;

  class: DogClass;

  shows: Show[];

  files: File[]
}

import { File } from '@/storage';
import { Show } from '@/show';


import { Sex } from './sex.interface';
import { Person } from './person.interface';
import { Title } from './title.interface';
import { DogClass } from './dog-class.interface';

export interface Dog {
  id: number;

  breed: number | string;

  fullname: string;

  name: string;

  birthday: Date;

  sex: Sex;

  weight: number;

  color: string;

  breedGroup: number | string;

  owner: Person | string;

  breeder: Person | string;

  titles: Title[];

  description: string;

  avatar: string;

  class: DogClass;

  shows: Show[];

  files: File[]
}
import { Person, Dog, Title, DogClass } from '@/clients';
import { File } from '@/storage';

import { ResultMark } from './mark.interface';
import { ShowRank } from './show-rank.interface';

export interface Show {
  id: number;

  name: string;

  dog: Dog;

  date: Date;

  address: string;

  judge: Person;

  class: DogClass;

  resultMark: ResultMark;

  resultText: string;

  resultTitles: number[];

  files: File[];

  rank: ShowRank;

  place: number;
}
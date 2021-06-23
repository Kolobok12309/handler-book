import { File } from '../storage';

export interface Person {
  id: number;

  isClient: boolean;

  isJudge: boolean;

  isBreeder: boolean;

  fullname: string;

  email: string;

  phone: string;

  description: string;

  avatar: File;
}
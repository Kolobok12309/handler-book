import { Module } from '@nestjs/common';

import {
  BreedModule,
  BreedGroupModule,
  DogModule,
  PersonModule,
} from './cruds';

@Module({
  imports: [BreedModule, BreedGroupModule, DogModule, PersonModule],
})
export class ClientsModule {}

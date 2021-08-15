import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PersonEntity } from './entities';
import { BreedModule, BreedGroupModule, DogModule } from './cruds';

@Module({
  imports: [
    BreedModule,
    BreedGroupModule,
    DogModule,
    TypeOrmModule.forFeature([PersonEntity]),
  ],
})
export class ClientsModule {}

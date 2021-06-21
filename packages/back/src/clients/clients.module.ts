import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BreedService, BreedGroupService } from './services';
import { BreedController } from './controllers';
import {
  BreedEntity,
  BreedGroupEntity,
  DogEntity,
  PersonEntity,
} from './entities';

@Module({
  controllers: [BreedController],
  providers: [BreedService, BreedGroupService],
  imports: [
    TypeOrmModule.forFeature([
      PersonEntity,
      DogEntity,
      BreedGroupEntity,
      BreedEntity,
    ]),
  ],
})
export class ClientsModule {}

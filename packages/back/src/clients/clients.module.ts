import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BreedService, BreedGroupService } from './services';
import { BreedController, BreedGroupController } from './controllers';
import {
  BreedEntity,
  BreedGroupEntity,
  SubBreedEntity,
  DogEntity,
  PersonEntity,
} from './entities';

@Module({
  controllers: [BreedController, BreedGroupController],
  providers: [BreedService, BreedGroupService],
  imports: [
    TypeOrmModule.forFeature([
      PersonEntity,
      DogEntity,
      BreedGroupEntity,
      BreedEntity,
      SubBreedEntity,
    ]),
  ],
})
export class ClientsModule {}

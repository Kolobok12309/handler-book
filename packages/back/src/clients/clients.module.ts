import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BreedService, BreedGroupService } from './services';
import { BreedController, BreedGroupController } from './controllers';
import {
  BreedEntity,
  BreedGroupEntity,
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
    ]),
  ],
})
export class ClientsModule {}

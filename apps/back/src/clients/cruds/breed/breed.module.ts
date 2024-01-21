import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BreedEntity, SubBreedEntity } from './entities';
import { BreedController } from './breed.controller';
import { BreedService } from './breed.service';

@Module({
  controllers: [BreedController],
  providers: [BreedService],
  imports: [TypeOrmModule.forFeature([BreedEntity, SubBreedEntity])],
})
export class BreedModule {}

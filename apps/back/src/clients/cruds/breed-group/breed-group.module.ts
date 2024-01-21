import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BreedGroupEntity } from './breed-group.entity';
import { BreedGroupController } from './breed-group.controller';
import { BreedGroupService } from './breed-group.service';

@Module({
  controllers: [BreedGroupController],
  providers: [BreedGroupService],
  imports: [TypeOrmModule.forFeature([BreedGroupEntity])],
})
export class BreedGroupModule {}

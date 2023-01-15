import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DogEntity } from './dog.entity';
import { DogController } from './dog.controller';
import { DogService } from './dog.service';

@Module({
  controllers: [DogController],
  providers: [DogService],
  imports: [TypeOrmModule.forFeature([DogEntity])],
})
export class DogModule {}

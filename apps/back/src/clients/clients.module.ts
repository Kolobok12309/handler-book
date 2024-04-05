import { Module } from '@nestjs/common';

import { BreedModule, BreedGroupModule, DogModule } from './cruds';

@Module({
  imports: [BreedModule, BreedGroupModule, DogModule],
})
export class ClientsModule {}

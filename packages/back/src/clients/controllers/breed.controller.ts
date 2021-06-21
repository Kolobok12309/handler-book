import { Controller } from '@nestjs/common';

import { BreedService } from '../services';

@Controller('breed')
export class BreedController {
  constructor(private readonly breedService: BreedService) {}
}

import { Controller } from '@nestjs/common';

import { BreedGroupService } from '../services';

@Controller('breed-group')
export class BreedGroupController {
  constructor(private readonly breedGroupService: BreedGroupService) {}
}

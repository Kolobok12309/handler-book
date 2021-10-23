import type { UpdateBreedGroupDto } from '@hb/back/src/clients/cruds/breed-group/dto';

export const defaultForm = () =>
  ({
    name: '',
    fci: null,
  } as UpdateBreedGroupDto);

import type {
  BreedDto,
  CreateBreedDto,
  UpdateBreedDto,
} from '@hb/back/src/clients/cruds/breed/dto';

import type {
  BreedGroupDto,
  CreateBreedGroupDto,
  UpdateBreedGroupDto,
} from '@hb/back/src/clients/cruds/breed-group/dto';

// Dog BreedGroups
export const getBreedGroups = ({ $get }) =>
  $get('/breed-group') as Promise<BreedGroupDto[]>;

export const addBreedGroup = ({ $post }, body: CreateBreedGroupDto) =>
  $post('/breed-group', body) as Promise<BreedGroupDto>;

export const updateBreedGroup = (
  { $patch },
  id: number,
  body: UpdateBreedGroupDto,
) => $patch(`/breed-group/${id}`, body) as Promise<BreedGroupDto>;

export const deleteBreedGroup = ({ $delete }, id: number) =>
  $delete(`/breed-group/${id}`) as Promise<boolean>;

// Dog Breeds
export const getBreeds = ({ $get }) => $get('/breed') as Promise<BreedDto[]>;

export const addBreed = ({ $post }, body: CreateBreedDto) =>
  $post('/breed', body) as Promise<BreedDto>;

export const updateBreed = ({ $patch }, id: number, body: UpdateBreedDto) =>
  $patch(`/breed/${id}`, body) as Promise<BreedDto>;

export const deleteBreed = ({ $delete }, id: number) =>
  $delete(`/breed/${id}`) as Promise<boolean>;

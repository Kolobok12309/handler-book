import {
  BreedGroupDto,
  CreateBreedGroupDto,
  UpdateBreedGroupDto,
  BreedDto,
  CreateBreedDto,
  UpdateBreedDto,
  SubBreedDto,
  CreateSubBreedDto,
  UpdateSubBreedDto,
} from '@hb/back/src/clients/dto';

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

// Dob subBreeds
export const addSubBreed = ({ $post }, body: CreateSubBreedDto) =>
  $post('/sub-breed', body) as Promise<SubBreedDto>;

export const updateSubBreed = (
  { $patch },
  id: number,
  body: UpdateSubBreedDto,
) => $patch(`/sub-breed/${id}`, body) as Promise<SubBreedDto>;

export const deleteSubBreed = ({ $delete }, id: number) =>
  $delete(`/sub-breed/${id}`) as Promise<boolean>;

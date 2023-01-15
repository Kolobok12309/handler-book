import type {
  DogDto,
  EditDogDto,
} from '@hb/back/dist/src/clients/cruds/dog/dto';

export const getDogs = ({ $get }, params = {}) =>
  $get('/dogs', { params }) as Promise<DogDto[]>;

export const addDog = ({ $post }, body: EditDogDto) =>
  $post('/dogs', body) as Promise<DogDto>;

export const updateDog = ({ $patch }, id: number, body: EditDogDto) =>
  $patch(`/dogs/${id}`, body) as Promise<DogDto>;

export const deleteDog = ({ $delete }, id: number) =>
  $delete(`/dogs/${id}`) as Promise<boolean>;

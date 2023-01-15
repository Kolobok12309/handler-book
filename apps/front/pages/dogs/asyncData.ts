import flatry from 'flatry';

import { getDogs } from '@/api/dogs';

export default async ({ app: { $axios }, error }) => {
  const [err, { dogs = [] } = {}] = await flatry(getDogs($axios));

  if (err) return error(err);

  return {
    dogs,
  };
};

import { DataSource } from 'typeorm';

import { isProd, defaultConfig } from './default-config';

export default new DataSource({
  ...defaultConfig,
  migrations: [isProd ? 'dist/seeds/*.js' : 'seeds/*.ts'],
});

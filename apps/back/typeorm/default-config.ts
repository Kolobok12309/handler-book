import type { DataSourceOptions } from 'typeorm';

export const getEnv = (name, defaultValue = undefined) =>
  process.env[name] !== undefined ? process.env[name] : defaultValue;

export const isProd = getEnv('NODE_ENV') === 'production';

// eslint-disable-next-line no-nested-ternary
const synchronize = getEnv('DB_SYNC', !isProd);
const envSsl = getEnv('DB_SSL');
const ssl =
  envSsl && envSsl !== 'false'
    ? {
        rejectUnauthorized: envSsl === 'strict',
      }
    : false;

const connectionOptions: DataSourceOptions = {
  type: 'postgres',
  synchronize,
  ssl,
  dropSchema: false,
  logging: true,
  entities: [isProd ? 'dist/src/**/*.entity.js' : 'src/**/*.entity.ts'],
  subscribers: [
    isProd ? 'dist/src/**/*.subscriber.js' : 'src/**/*.subscriber.ts',
  ],
};

let defaultConfig: DataSourceOptions;

if (getEnv('DATABASE_URL', false)) {
  defaultConfig = {
    ...connectionOptions,
    url: getEnv('DATABASE_URL'),
  };
} else {
  defaultConfig = {
    ...connectionOptions,
    host: getEnv('DB_HOST', 'localhost'),
    port: getEnv('DB_PORT', 5432),
    username: getEnv('DB_USER', 'postgres'),
    password: getEnv('DB_PASS', 'example'),
    database: getEnv('DB_NAME', 'postgres'),
  };
}

export { defaultConfig };

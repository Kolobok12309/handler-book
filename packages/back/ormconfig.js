// eslint-disable-next-line
const process = require('process');

const getEnv = (name, defaultValue = undefined) =>
  process.env[name] !== undefined ? process.env[name] : defaultValue;

const isProd = getEnv('NODE_ENV') === 'production';

// eslint-disable-next-line no-nested-ternary
const synchronize = getEnv('DB_SYNC', !isProd);
const envSsl = getEnv('DB_SSL');
const ssl = envSsl && envSsl !== 'false'
  ? {
    rejectUnauthorized: envSsl !== 'strict',
  }
  : false;

const connectionOptions = {
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

let mainConfig;

if (getEnv('DATABASE_URL', false)) {
  mainConfig = {
    ...connectionOptions,
    url: getEnv('DATABASE_URL'),
  };
} else {
  mainConfig = {
    ...connectionOptions,
    host: getEnv('DB_HOST', 'localhost'),
    port: getEnv('DB_PORT', 5432),
    username: getEnv('DB_USER', 'postgres'),
    password: getEnv('DB_PASS', 'example'),
    database: getEnv('DB_NAME', 'postgres'),
  };
}

module.exports = [
  {
    ...mainConfig,
    migrations: [isProd ? 'dist/migrations/*.js' : 'migrations/*.ts'],
    cli: {
      migrationsDir: 'migrations',
    },
  },
  {
    ...mainConfig,
    name: 'seed',
    migrations: [isProd ? 'dist/seeds/*.js' : 'seeds/*.ts'],
    cli: {
      migrationsDir: 'seeds',
    },
  },
];

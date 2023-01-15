import dotenv from 'dotenv';

// populate process.env with config values
dotenv.config();

const ENV_WHITE_LIST = ['NODE_ENV', 'VUE_ENV', 'BABEL_ENV', 'DEBUG', 'HOST'];
const PREFIX = /^HB_/;

const env: NodeJS.ProcessEnv = {};

Object.entries(process.env).forEach(([key, value]) => {
  if (PREFIX.test(key) || ENV_WHITE_LIST.includes(key)) {
    env[key] = value;
  }
});

export default env;

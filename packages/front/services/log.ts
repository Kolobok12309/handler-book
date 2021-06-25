import debug from 'debug';

if (process.env.DEBUG) {
  debug.enable(process.env.DEBUG);
}

const log = debug('@hb/front');

export default (name, ...args) => {
  return log.extend(name, ...args);
};

import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: [
    {
      builder: 'mkdist',
      input: './src/',
      outDir: './dist/',
      format: 'cjs',
      ext: 'cjs',
    },
    {
      builder: 'mkdist',
      input: './src/',
      outDir: './dist/',
    },
  ],

  declaration: true,
});

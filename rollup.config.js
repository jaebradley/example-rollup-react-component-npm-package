import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import filesize from 'rollup-plugin-filesize';
import autoprefixer from 'autoprefixer';
import localResolve from 'rollup-plugin-local-resolve';

import pkg from './package.json';

const INPUT_FILE_PATH = 'src/index.js';
const OUTPUT_NAME = 'Example';

const GLOBALS = {
  react: 'React',
  'react-dom': 'ReactDOM',
};

const PLUGINS = [
  postcss({
    extract: true,
    plugins: [
      autoprefixer,
    ],
  }),
  babel({
    exclude: 'node_modules/**',
  }),
  localResolve(),
  resolve({
    browser: true,
  }),
  commonjs(),
  filesize(),
];

const EXTERNAL = [
  'react',
  'react-dom',
];

const OUTPUT_DATA = [
  {
    file: pkg.browser,
    format: 'umd',
  },
  {
    file: pkg.main,
    format: 'cjs',
  },
  {
    file: pkg.module,
    format: 'es',
  },
];

const config = OUTPUT_DATA.map(({ file, format }) => ({
  input: INPUT_FILE_PATH,
  output: {
    file,
    format,
    name: OUTPUT_NAME,
    globals: GLOBALS,
  },
  external: EXTERNAL,
  plugins: PLUGINS,
}));

export default config;

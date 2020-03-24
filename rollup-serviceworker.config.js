import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const BROWSER_TARGET = {
  browsers: ['chrome >= 71'],
};

export default [
  {
    input: 'src/sw.js',
    plugins: [
      resolve(),
      babel({
        presets: [
          [
            '@babel/preset-env',
            {
              targets: BROWSER_TARGET,
              modules: false,
            },
          ],
        ],
      }),
      terser(),
    ],
    output: {
      file: 'dist/sw.js',
      format: 'iife',
    },
  },
];
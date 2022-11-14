import peerDepsExternal from 'rollup-plugin-peer-deps-external';
// import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import alias from 'rollup-plugin-alias';
import multiEntry from 'rollup-plugin-multi-entry';
import json from '@rollup/plugin-json';

const config = [
  {
    input: 'index.ts',
    output: [
      {
        file: 'build/index.js',
        format: 'cjs'
      },
      {
        file: 'build/index.es.js',
        format: 'esm'
      }
    ],
    plugins: [
      json(),
      alias({
        applicationRoot: `${__dirname}`
      }),
      peerDepsExternal(),
      commonjs(),
      // resolve({
      //   preferBuiltins: false,
      //   mainFields: ['browser', 'jsnext:main', 'module', 'main']
      // }),
      typescript({
        useTsconfigDeclarationDir: true,
        tsconfig: 'tsconfig-rollup.json'
      })
    ]
  },
  {
    input: ['index.ts', '**/*.tsx'],
    output: [
      {
        dir: 'build',
        format: 'cjs',
        sourcemap: true
      }
    ],
    preserveModules: true,
    plugins: [
      json(),
      peerDepsExternal(),
      // resolve({
      //   extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
      // }),
      commonjs(),
      typescript({
        useTsconfigDeclarationDir: true,
        tsconfig: 'tsconfig-rollup.json'
      }),
      multiEntry()
    ]
  }
];

export default config;

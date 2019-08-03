// Rollup plugins
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import json from 'rollup-plugin-json'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'

// add rollup-plugin-postcss
import postcss from 'rollup-plugin-postcss'

// add postcss plugins
import simplevars from 'postcss-simple-vars'
import nested from 'postcss-nested'
import cssnext from 'postcss-cssnext'
import cssnano from 'cssnano'

export default {
  input: './packages/index.js',
  external: ['react'],
  output: [
    {
      file: './dist/ink.cjs.js',
      format: 'cjs',
      env: 'production',
      name: 'inkReact',
      exports: 'named',
      sourcemap: true
    },
    {
      file: './dist/ink.umd.js',
      format: 'umd',
      env: 'production',
      name: 'inkReact', // mounted in windows
      exports: 'named',
      sourcemap: true,
      globals: {
        vue: 'Vue'
      }
    },
    {
      file: './dist/ink.es.js',
      format: 'es',
      env: 'production',
      sourcemap: true
    }
  ],
  plugins: [
    postcss({
      extensions: ['.css'],
      plugins: [
        simplevars(),
        nested(),
        cssnext({ warnForDuplicates: false }),
        cssnano()
      ]
    }),
    resolve({
      mainFields: ['module', 'main']
    }),
    json(),
    babel({
      exclude: 'node_modules/**'
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    replace({
      ENV: JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    process.env.NODE_ENV !== 'production' && terser()
  ],
  watch: {
    include: './packages/**',
    exclude: 'node_modules/**'
  }
}

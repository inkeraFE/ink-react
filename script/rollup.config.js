// Rollup plugins
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import json from 'rollup-plugin-json'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import external from 'rollup-plugin-peer-deps-external'

// add rollup-plugin-postcss
import postcss from 'rollup-plugin-postcss'

// add postcss plugins
import simplevars from 'postcss-simple-vars'
import nested from 'postcss-nested'
import presetEnv from 'postcss-preset-env'
import cssnano from 'cssnano'

export default {
  input: './packages/index.js',
  output: [
    {
      file: './dist/ink.cjs.js',
      format: 'cjs',
      name: 'inkReact',
      exports: 'named',
      sourcemap: true
    },
    {
      file: './dist/ink.umd.js',
      format: 'umd',
      name: 'inkReact', // mounted in windows
      exports: 'named',
      sourcemap: true,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM'
      }
    },
    {
      file: './dist/ink.es.js',
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    external({
      packageJsonPath: '../package.json'
    }),
    postcss({
      extensions: ['.less'],
      plugins: [simplevars(), nested(), presetEnv(), cssnano()]
    }),
    resolve({
      mainFields: ['module', 'main']
    }),
    json(),
    commonjs({
      include: 'node_modules/**'
    }),
    babel({
      presets: ['@babel/env', '@babel/react'],
      plugins: ['transform-react-jsx'],
      exclude: 'node_modules/**'
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

import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import nodeResolve from 'rollup-plugin-node-resolve';
import autoExternal from 'rollup-plugin-auto-external';

export default {
  input: 'src/index.js',
  plugins: [
    autoExternal(),
    nodeResolve({mainFields: ['module']}),
    json(),
    babel({
      babelrc: false,
      exclude: ['./node_modules/**'],
      presets: [
        ['@babel/env', {targets: {node: 'current', browsers: ['last 2 versions']}, modules: false}],
        '@babel/react'
      ],
      plugins: [
        ['@babel/proposal-object-rest-spread', {useBuiltIns: true}],
        ['transform-react-remove-prop-types', {mode: 'wrap'}],
        'babel-plugin-inline-react-svg'
      ]
    })
  ],
  output: [
    {file: 'lib/components.cjs.js', format: 'cjs', sourcemap: true},
    {file: 'lib/components.es.js', format: 'es', sourcemap: true}
  ]
};

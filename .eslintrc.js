module.exports = {
  parser: 'babel-eslint',
  plugins: ['prettier', 'react-hooks'],
  rules: {
    'prettier/prettier': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    camelcase: 0,
    semi: 0
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'standard-jsx',
    'prettier',
    'prettier/standard'
  ]
}

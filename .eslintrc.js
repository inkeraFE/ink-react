module.exports = {
  parser: 'babel-eslint',
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    camelcase: 0,
    semi: 0
  },
  extends: [
    'standard',
    'prettier',
    'prettier/standard'
  ]
}

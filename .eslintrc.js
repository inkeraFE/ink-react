module.exports = {
  parser: 'babel-eslint',
  plugins: ['prettier', "react-hooks"],
  rules: {
    'prettier/prettier': 'error',
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    camelcase: 0,
    semi: 0
  },
  extends: [
    'plugin:react/recommended'
    'standard',
    'standard-jsx'
    'prettier',
    'prettier/standard'
  ]
}

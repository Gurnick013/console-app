module.exports = {
  extends: ['plugin:jest/recommended', 'plugin:prettier/recommended', 'prettier'],
  plugins: ['jest', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
};

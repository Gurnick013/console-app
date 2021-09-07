module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'plugin:node/recommended',
    'prettier',
  ],
  parserOptions: {
    sourceType: 'module',
  },
};

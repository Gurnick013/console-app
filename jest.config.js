export default {
  roots: ['<rootDir>/test'],
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/bin/$1',
    'tests/(.*)': '<rootDir>/__tests__/$1',
  },
};

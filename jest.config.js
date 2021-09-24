export default {
  roots: ['<rootDir>/src/service'],
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/bin/$1',
    'tests/(.*)': '<rootDir>/__tests__/$1',
  },
};

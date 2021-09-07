export default {
  roots: ['<rootDir>/src'],
  testMatch: ['<rootDir>/**/__tests__/**/*.spec.js'],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  moduleNameMapper: {
    '^.+\\.(css|scss|png)$': 'identity-obj-proxy',
  },
  transformIgnorePatterns: ['node_modules/(?!variables/.*)'],
};

module.exports = {
  collectCoverageFrom: ['src/**/*.{js, jsx, ts, tsx}'],
  coverageReporters: ['json', 'json-summary'],
  coverageThreshold: {
    global: {
      branches: 40,
      functions: 50,
      lines: 50,
      statement: 50,
    },
  },
  preset: 'react-native',
  moduleDirectories: ['./src', 'node_modules'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'node', 'tsx', 'ts'],
  testPathIgnorePatterns: ['<rootDir>/(build|node_modules)'],
  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>/src/**/*.test.[j|t]s?(x)',
    '<rootDir>/src/**/__tests__/*.spec.[j|t]s?(x)',
  ],
  rootDir: __dirname,
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$':
      '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'identity-obj-proxy',
  },
  transformIgnorePatterns: ['node_modules/(?!@react-native|react-native)'],
  setupFiles: ['<rootDir>/config/polyfills.js'],
  verbose: true,
  clearMocks: true,
};

module.exports = {
  preset: 'react-native',
  modulePaths: [
    "<rootDir>"
  ],
  testPathIgnorePatterns: [
    "<rootDir>/ios/",
    "<rootDir>/android/",
  ],
  testMatch: [ "**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?", '<rootDir>/src/**/*.test.js', '<rootDir>/src/**/*.test.jsx' ],
  collectCoverage: true,
  collectCoverageFrom: [
      '**/*.{js,jsx,ts,tsx}',
      '!**/node_modules/**',
      '!<rootDir>/.eslintrc.js',
      '!<rootDir>/babel.config.js',
      '!<rootDir>/jest.config.js',
      '!<rootDir>/metro.config.js',
      '!<rootDir>/react-native.config.js',
      '!<rootDir>/rn-cli.config.js',
      '!<rootDir>/coverage/**',
      '!<rootDir>/devops-tools/',
      '!<rootDir>/devops-tools/tools',
    ],
    coverageReporters: ["lcov", "json", "html"],
};

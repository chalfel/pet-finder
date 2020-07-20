

module.exports = {
  bail: true,
  coverageDirectory: 'coverage',
  coverageReporters: [
    "lcov",
  ],
  testEnvironment: 'node',
  testMatch: [
    '**/__tests__/**/*.test.js?(x)',
    // '**/?(*.)+(spec|test).[tj]s?(x)',
  ],
  verbose: true,
};

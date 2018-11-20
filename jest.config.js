module.exports = {
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*(\\.|/)(test|spec))\\.ts$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],
  // setupTestFrameworkScriptFile: './jest.setup.ts',
  modulePaths: ['<rootDir>/src/'],
  // modulePathIgnorePatterns: ['dist'],
};

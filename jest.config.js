module.exports = {
  clearMocks: true,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transform: {
    '^.+\\.tsx?$': '@swc/jest',
  },
  testMatch: null,
  testRegex: '(/__tests__/.*)\\.test\\.(tsx?)$',
  setupFiles: ['./jest-setup.js'],
};

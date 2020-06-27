module.exports = {
  transform: {
    '^.+\\.(t|j)s$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testRegex: '((\\.|/*.)(test))\\.js?$',
  setupFiles: ['<rootDir>src/setupTests.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};

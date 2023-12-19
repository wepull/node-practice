module.exports = {
    moduleDirectories: [
      "node_modules"
    ],
    testEnvironment: 'node',
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    transform: {
      '^.+\\.(jsx?|tsx?)$': 'babel-jest',
    },
  };
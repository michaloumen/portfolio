module.exports = {
  // testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)', '**/test.js'],

  transform: {
    '\\.(js|jsx)$': 'babel-jest',
  },

  moduleNameMapper: {
    '\\.(svg)$': 'identity-obj-proxy',
  },

  testEnvironment: 'jsdom',
};

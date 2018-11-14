module.exports = {
  root: true,
  env: {
    node: true,
    mocha: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/prefer-default-export': 'off',
    'comma-dangle': 2,
    'mocha/no-exclusive-tests': 'error',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  plugins: [
    'mocha',
  ],
};

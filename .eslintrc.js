/**
 * @author Ray
 */
module.exports = {
  plugins: ['react'],
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
    commonjs: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    'react/prop-types': 0
  }
};

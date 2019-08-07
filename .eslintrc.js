/**
 * @author Ray
 */
module.exports = {
    extends: ['eslint:recommended', 'prettier'],
    parser: 'babel-eslint',
    env: {
        browser: true,
        commonjs: true,
        node: true,
        es6: true,
        jest: true
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    rules: {}
};

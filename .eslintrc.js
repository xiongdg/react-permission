/**
 * @author Ray
 */
module.exports = {
    extends: ['eslint:recommended', 'prettier'],
    env: {
        browser: true,
        commonjs: true,
        node: true,
        es6: true
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    rules: {}
};

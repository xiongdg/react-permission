/**
 * @author Ray
 */
module.exports = {
    plugins: ['react'],
    extends: ['eslint:recommended', 'prettier'],
    parser: 'babel-eslint',
    env: {
        browser: true,
        node: true,
        jest: true
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            experimentalObjectRestSpread: true
        }
    },
    rules: {}
};

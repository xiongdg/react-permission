/**
 * @author Ray
 */

const dotenv = require('dotenv');
const babel = require('rollup-plugin-babel');
const del = require('rollup-plugin-delete');
const alias = require('rollup-plugin-alias');
const replace = require('rollup-plugin-replace');
const pkg = require('./package.json');

const isDev = process.env.NODE_ENV === 'development';

dotenv.config({
    path: isDev ? '.env' : '.env.production'
});

module.exports = {
    input: 'src/index.js',
    external: Object.keys(pkg.peerDependencies || {}),
    output: [
        {
            name: `${pkg.export}`,
            file: `${process.env.BUILD_PATH}/${pkg.export}.cjs.js`,
            format: 'cjs',
            globals: {
                react: 'React'
            },
            exports: 'named'
        },
        {
            name: `${pkg.export}`,
            file: `${process.env.BUILD_PATH}/${pkg.export}.umd.js`,
            format: 'umd',
            moduleName: pkg.export,
            globals: {
                react: 'React'
            },
            exports: 'named'
        }
    ],
    plugins: [
        babel({
            include: ['src/**/*'],
            exclude: ['node_modules/**']
        })
    ].concat([
        // customize your alias here
        alias({
            '@': 'src',
            utils: 'src/utils'
        }),
        replace({
            __DEV__: isDev
        }),
        del({
            targets: `dist/*`
        })
    ])
};

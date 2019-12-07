/**
 * @author Ray
 */

const dotenv = require('dotenv');
const babel = require('rollup-plugin-babel');
const del = require('rollup-plugin-delete');
const alias = require('rollup-plugin-alias');
const replace = require('rollup-plugin-replace');
const { devEnv, peerDependencies } = require('./package.json');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    input: 'src/index.js',
    external: Object.keys(peerDependencies || {}),
    output: [
        {
            name: `${devEnv.pkgName}`,
            file: `${process.env.BUILD_PATH}/${devEnv.pkgName}.cjs.js`,
            format: 'cjs',
            exports: 'named'
        },
        {
            name: `${devEnv.pkgName}`,
            file: `${process.env.BUILD_PATH}/${devEnv.pkgName}.umd.js`,
            format: 'umd',
            moduleName: devEnv.pkgName,
            globals: {
                react: 'React',
                '@westernwood/utils': 'utils'
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
        alias({ utils: 'src/utils' }),
        replace({ __DEV__: isDev }),
        del({ targets: `dist/*` })
    ])
};

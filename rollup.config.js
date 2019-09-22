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

dotenv.config({
    path: isDev ? '.env' : '.env.production'
});

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
        // customize your alias here
        alias({ '@': 'src', utils: 'src/utils' }),
        replace({ __DEV__: isDev }),
        del({ targets: `dist/*` })
    ])
};

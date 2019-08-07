/**
 * @author Ray
 */

const dotenv = require('dotenv');
const babel = require('rollup-plugin-babel');
const del = require('rollup-plugin-delete');
const alias = require('rollup-plugin-alias');
const replace = require('rollup-plugin-replace');
const { exportName } = require('./package.json');

const isDev = process.env.NODE_ENV === 'development';

dotenv.config({
    path: isDev ? '.env' : '.env.production'
});

module.exports = {
    input: 'src/index.js',
    output: [
        {
            file: `${process.env.BUILD_PATH}/${exportName}.cjs.js`,
            format: 'cjs'
        },
        {
            name: `${exportName}`,
            file: `${process.env.BUILD_PATH}/${exportName}.umd.js`,
            format: 'umd'
        }
    ],
    plugins: [
        babel({
            include: ['src/**/*'],
            exclude: ['node_modules/**']
        })
    ].concat(
        isDev
            ? [
                  // customize your alias here
                  alias({
                      //   utils: 'src/utils'
                  }),
                  replace({
                      __DEV__: isDev
                  })
              ]
            : [
                  del({
                      targets: `dist/*`
                  })
              ]
    )
};

var path = require('path');

/**
 * Note that this webpack config is for the AWS lambda compilation, not the React site app.
 * The site build is handled completely by create-react-app (which is not 'ejected').
 */

module.exports = {
    entry: './src/lambda/index.ts',
    target: 'node',
    module: {
        loaders: [
            {test: /\.ts(x?)$/, loader: 'ts-loader'}
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.tsx', '.jsx']
    },
    externals: [
        {
            "aws-sdk": true
        }
    ],
    output: {
        libraryTarget: 'commonjs',
        path: path.join(__dirname, 'build-api'),
        filename: 'handler.js'
    }
};

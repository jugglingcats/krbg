var path = require('path');
module.exports = {
    entry: './src/lambda/index.ts',
    target: 'node',
    module: {
        loaders: [
            { test: /\.ts(x?)$/, loader: 'ts-loader' }
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
//# sourceMappingURL=webpack.config.js.map
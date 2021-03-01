const path = require("path")
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'production',
    entry: 'index.js',
    output: {
        path: path.resolve('lib'),
        filename: 'index.js',
        library: "react-native-scroll-to-element",
        libraryTarget: "commonjs2"
    },
    externals: [nodeExternals(), {
        react: 'react',
        'react-native': 'react-native'
    }],
    optimization: {
        minimize: true
    },
    module: {
        rules: [ {
            test: /\.(js|jsx|tsx|ts)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
           }]
    },
    target: 'node',
    node: {
        __dirname: true
    },
    resolve: {
        extensions: ['.ts', '.js', '.json', '.jsx', '.tsx']
    }
}
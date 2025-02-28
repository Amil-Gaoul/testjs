// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyPlugin = require("copy-webpack-plugin");
//
// module.exports = {
//     entry: './src/app.js',
//     mode: 'development',
//     output: {
//         filename: 'main.js',
//         path: path.resolve(__dirname, 'dist'),
//         clean: true,
//     },
//     devServer: {
//         static: './dist',
//         compress: true,
//         port: 9000,
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: "./index.html"
//         }),
//         new CopyPlugin({
//             patterns: [
//                 { from: "templates", to: "templates" },
//                 { from: "static/fonts", to: "fonts" },
//                 { from: "static/images", to: "images" },
//             ],
//         }),
//     ],
//     module: {
//         rules: [
//             {
//                 test: /\.css$/,
//                 use: [
//                     'style-loader',
//                     'css-loader'
//                 ]
//             }
//         ]
//     }
// };

// 2 step
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/app.js',
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
        static: '.dist',
        compress: true,
        port: 9000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new CopyPlugin({
            patterns: [
                { from: "templates", to: "templates" },
                { from: "static/fonts", to: "fonts" },
                { from: "static/images", to: "images" },
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
};
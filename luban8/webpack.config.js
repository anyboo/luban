var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const url = require('url')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
     module: {
        rules: [{
            test: /\.vue$/,
            use: ['vue-loader']
        }, {
            test: /\.js$/,
            use: ['babel-loader'],
            exclude: /node_modules/
        }, {
            test: /\.html$/,
            use: [{
                loader: 'html-loader',
                options: {
                    root: path.resolve(__dirname, 'src'),
                    attrs: ['img:src', 'link:href']
                }
            }]
        }, 
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader'
            })
        }, 
        {
            test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
            exclude: /favicon\.png$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new ExtractTextPlugin('styles.css'),
    ],
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src')
        }
    },
    devServer: {
        host: '0.0.0.0',
        port: 8090,
        proxy: {
            '/api/': {
                target: 'http://127.0.0.1:8080',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
   
    }
}


const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: __dirname + "/src/js/main.js",
    output: {
      path: __dirname + '/',
      filename: 'bundle.js',
      publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
                    { loader: 'sass-loader', options: { sourceMap: true } 
                }]
            }, {
                test: /\.pug$/,
                loader: 'pug-loader'
            }, {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [{ loader:'file-loader',
                    options: {
                        outputPath: 'src/assets/',
                        name: "[name].[ext]"
                    }
                }]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/src/templates/index.pug",
        }),
        new MiniCssExtractPlugin({
            filename: "style.css",
        })
    ],
    devServer: {  // configuration for webpack-dev-server
        contentBase: '/',
        port: 7700,
    },
  };
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: __dirname + "/src/js/main.js",
    output: {
      path: __dirname + '/build',
      filename: 'bundle.js',
      publicPath: '/'
    },
    module: {
        rules: [{
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },{
                test: /\.pug$/,
                loader: 'pug-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/src/templates/index.pug",
        })
    ],
    devServer: {  // configuration for webpack-dev-server
        contentBase: '/',
        port: 7700,
    },
  };
const path = require('path');   
const HtmlWebPackPlugin = require("html-webpack-plugin");



module.exports = {
    devtool: 'source-map',
    mode: "production",
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
    
},
performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
},
module: {
    rules:[
        {
            test:/\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }
    ]
},
plugins:[
    new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
    }),

  ]
}

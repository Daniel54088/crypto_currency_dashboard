const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
module.exports = {
    module: {
      rules: [
        {
          test: /\.html$/,
          use: {
            loader: "html-loader" 
          }
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader" 
          }
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"]
        },
        {
          test: /\.scss$/,
          loaders: [
              {loader: 'style-loader'},
              {loader: 'css-loader'},
              {loader: 'sass-loader'}
          ]
        },
        {
          test: /\.(ttf|eot|woff|woff2)$/,
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
          },
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name]-[hash].[ext]',
                publicPath: '/images', //every page load the imgs will start with this path 
                outputPath: 'images', //all images will build in this folder
              }
            }
          ]
        }   
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./src/index.html", //origin html 
        inject:false, // use origin index html from template , will not insert css or js  automatically 
      }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
  };
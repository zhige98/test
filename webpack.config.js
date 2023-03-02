const path = require("path");
const { DefinePlugin } = require('webpack')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  mode:'development',
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build"),
  },
  devServer: {
    hot: true,
    // host: "0.0.0.0",
    // port: 8888,
    // open: true
    // compress: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test:/\.png|\.jpe?g|\.svg|\.webp/,
        type:'asset',
        parser: {
            dataUrlCondition: {
              maxSize: 9 * 1024 // 4kb
            }
          }
      },
      {
        test:/\.js$/,
        use:[
            {
            loader:'babel-loader',
            options:{
                plugins:['@babel/plugin-transform-arrow-functions']
            }
        }
        ]               
       
      },
    //   {
    //     test:/\.png|\.jpe?g|\.svg|\.webp/,
    //     use:{
    //         loader: 'url-loader',
    //         options: {
    //           limit: 8192,
    //         }
    //       },
    //     // type:'javascript/auto'
      
    //   }

    ],
  },
  plugins:[
    new DefinePlugin({
      hqz:"'123'",
      BASE_URL: "'./'",
    }),
    new HtmlWebpackPlugin({
      title: "",
      template: "./index.html"
    }),
    new CleanWebpackPlugin()
  ],
};

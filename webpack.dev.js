const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  entry: {
    app: './index.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: "[name].[hash].js"
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.scss'],
    alias: {
      '@': resolve('./examples/'),
      'vue$': 'vue/dist/vue.esm.js',
      'scss-kit': path.resolve(__dirname, './src/scss-kit/_index.scss'),
      'js-component': path.resolve(__dirname, './src/js-component')
    }
  },
  module: {
    rules: [
      // {
      //   test: /\.(js|vue)$/,
      //   loader: 'eslint-loader',
      //   enforce: 'pre',
      //   include: [resolve('src'), resolve('test')],
      //   options: {
      //     formatter: require('eslint-friendly-formatter')
      //   }
      // },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader'
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.md$/,
        use: [{
            loader: "html-loader"
          },
          {
            loader: "markdown-loader",
            options: {
              /* your options here */
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          // name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          // name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'vue-iuim - the flexible component library for vue 2.x',
      filename: './index.html',
      template: './index.html',
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    inline: true,
    host: '0.0.0.0',
    disableHostCheck: true
  }
}
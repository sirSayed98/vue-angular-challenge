const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './index.js',
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'app/index.html',
      filename: 'index.html',
    }),
    new ESLintPlugin({
      failOnError: true,
      emitWarning: false,
      outputReport: true
    }),
    new VueLoaderPlugin(),
  ],
  devServer: {
    static: './dist',
    hot: true,
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(html)$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'angularjs-template-loader',
            options: {
              relativeTo: path.resolve(__dirname, './app'),
            },
          },
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
      {
        test: /\.(scss|css)/,
        exclude: [/vue-components|views/],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'styles/[name].css',
            },
          },
          {
            loader: 'extract-loader',
            options: {
              publicPath: '../',
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
      // https://vue-loader.vuejs.org/guide/pre-processors.html
      // this will apply to both plain `.scss` files
      // AND `<style lang="scss">` blocks in `.vue` files
      // {
      //   test: /\.scss$/,
      //   // include: [/vue-components|views/],
      //   use: [
      //     // 'vue-style-loader',
      //     'css-loader',
      //     'sass-loader',
      //   ],
      // },
    ],
  },
};

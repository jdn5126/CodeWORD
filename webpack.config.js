const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, "./CodeWord/static/js/"),
  output: {
    path: path.resolve(__dirname, 'CodeWord/static/dist'),
    filename: 'bundle.js',
  },
  resolve: {
    modules: [path.join(__dirname, 'CodeWord/static/js'), 'node_modules'],
    alias: {
      react: path.join(__dirname, 'node_modules', 'react'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './CodeWord/templates/index.html',
    }),
  ],
};


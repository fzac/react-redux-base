import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import common from './webpack.config.babel';

const src = path.resolve(__dirname, '../src');

const prdConfig = {
  // plugins
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        HOST: JSON.stringify('https://prd.jp'),
      },
    }),
    new HtmlWebpackPlugin({
      title: 'prd-title',
      filename: 'index.html',
      template: `${src}/index.html`,
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
  ],
};

export default merge(common, prdConfig);

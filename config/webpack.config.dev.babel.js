import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import common from './webpack.config.babel';

const src = path.resolve(__dirname, '../src');

const devConfig = {
  // plugins
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        HOST: JSON.stringify('http://localhost:3000'),
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'dev-title',
      template: `${src}/index.html`,
    }),
  ],
};

export default merge(common, devConfig);

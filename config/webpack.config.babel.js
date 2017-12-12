import path from 'path';

const src = path.resolve(__dirname, '../src');
const dist = path.resolve(__dirname, '../dist');
const filename = process.env.NODE_ENV === 'development' ? '/js/bundle.js' : 'js/[hash].js';

export default {
  entry: [
    `${src}/index.jsx`,
  ],

  output: {
    path: dist,
    filename,
  },

  devServer: {
    contentBase: 'dist',
    port: 8000,
  },

  // resole path
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  // JSX ES2015
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: 'url-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};

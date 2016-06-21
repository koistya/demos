/**
 * MIT License (c) 2016-present Konstantin Tarkus <hello@tarkus.me>
 */

const path = require('path');
const webpack = require('webpack');

const isDebug = process.argv.includes('--debug') || process.argv.includes('-d');
const isVerbose = process.argv.includes('--verbose') || process.argv.includes('-v');

/**
 * Webpack configuration (core/main.js => dist/main.js)
 * http://webpack.github.io/docs/configuration.html
 */
const config = {
  // The base directory
  context: path.resolve(__dirname, '../'),

  // The entry point for the bundle
  entry: [
    './core/main.js'
  ],

  // Options affecting the output of the compilation
  output: {
    path: path.resolve(__dirname, '../dist/'),
  },

  // Switch loaders to debug or release mode
  debug: isDebug,

  // Developer tool to enhance debugging, source maps
  // http://webpack.github.io/docs/configuration.html#devtool
  devtool: isDebug ? 'source-map' : false,

  // What information should be printed to the console
  stats: {
    colors: true,
    reasons: isDebug,
    hash: isVerbose,
    version: isVerbose,
    timings: true,
    chunks: isVerbose,
    chunkModules: isVerbose,
    cached: isVerbose,
    cachedAssets: isVerbose,
  },

  // The list of plugins for Webpack compiler
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': isDebug ? '"development"' : '"production"',
      __DEV__: isDebug,
    }),
  ],

  // Options affecting the normal modules
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, '../components'),
          path.resolve(__dirname, '../core'),
          path.resolve(__dirname, '../views'),
        ],
        loader: 'babel-loader',
      },
      {
        test: /routes\.yml$/,
        loader: path.resolve(__dirname, './lib/routes-loader.js'),
      },
      {
        test: /\.css/,
        loaders: [
          'style-loader',
          `css-loader?${JSON.stringify({ sourceMap: isDebug, minimize: !isDebug })}`,
          'postcss-loader',
        ],
      },
    ],
  },

  // The list of plugins for PostCSS
  // https://github.com/postcss/postcss
  postcss() {
    return [
      // Add vendor prefixes to CSS rules using values from caniuse.com
      // https://github.com/postcss/autoprefixer
      require('autoprefixer')(),
    ];
  }
};

// Optimize the bundle in release (production) mode
if (!isDebug) {
  config.plugins.push(new webpack.optimize.DedupePlugin());
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({ compress: { warnings: isVerbose } }));
  //config.plugins.push(new webpack.optimize.AggressiveMergingPlugin());
}

module.exports = config;

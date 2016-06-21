/**
 * MIT License (c) 2016-present Konstantin Tarkus <hello@tarkus.me>
 */

const webpack = require('webpack');
const task = require('./lib/task');
const config = require('./webpack.config');

const isWatch = process.argv.includes('--watch') || process.argv.includes('-w');

module.exports = task('bundle', new Promise((resolve, reject) => {
  const bundler = webpack(config);
  const run = (err, stats) => {
    if (err) {
      reject(err);
    } else {
      console.log(stats.toString(config.stats));
      resolve();
    }
  };
  bundler.run(run);
}));

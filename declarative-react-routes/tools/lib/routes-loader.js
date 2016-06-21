/**
 * MIT License (c) 2016-present Konstantin Tarkus <hello@tarkus.me>
 */

const yaml = require('yaml');

module.exports = function routes(source) {
  this.cacheable();

  var routes = yaml.eval(source);
  var result = ['[\n'];

  routes.forEach(route => {
    const fetch = route.fetch || {};
    result.push(`  {
    path: '${route.path.replace('\'', '\\\'')}',
    view: () => System.import('${route.view}'),
    fetch: {
${Object.keys(fetch).map(key => `      ${key}: '${fetch[key].replace('\'', '\\\'')}',\n`)}    },
  },
`);
  });

  result.push(']');
  routes = result.join('');

  return `module.exports = ${routes};`;
};

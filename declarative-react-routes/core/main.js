/**
 * MIT License (c) 2016-present Konstantin Tarkus <hello@tarkus.me>
 */

require('babel-polyfill');
require('whatwg-fetch');

const ReactDOM = require('react-dom');
const routes = require('../routes.yml');
const resolveRoute = require('./resolveRoute').default;
const container = document.getElementById('root');

async function render() {
  const path = window.location.hash.substr(1) || '/';
  try {
    const component = await resolveRoute(routes, { path });

    if (!component) {
      const error = new Error('Page not found');
      error.status = 404;
      throw error;
    }

    ReactDOM.render(component, container);
  } catch (error) {
    const component = await resolveRoute(routes, { path: '/error', error });

    if (!component) {
      throw error;
    }

    ReactDOM.render(component, container);
  }
}


window.addEventListener('hashchange', () => render());
render();

/**
 * MIT License (c) 2016-present Konstantin Tarkus <hello@tarkus.me>
 */

require('babel-polyfill');
require('whatwg-fetch');

const ReactDOM = require('react-dom');
const routes = require('./routes').default;
const resolveRoute = require('./resolveRoute').default;
const container = document.getElementById('root');

async function render() {
  const path = window.location.hash.substr(1) || '/';
  try {
    const {title, component} = await resolveRoute(routes, { path }) || {};

    if (!component) {
      const error = new Error('Page not found');
      error.status = 404;
      throw error;
    }

    ReactDOM.render(component, container, () => {
      document.title = title;
    });
  } catch (error) {
    const { title, component } = await resolveRoute(routes, { path: '/error', error }) || {};

    if (!component) {
      throw error;
    }

    ReactDOM.render(component, container, () => {
      document.title = title || 'Error';
    });
  }
}


window.addEventListener('hashchange', () => render());
render();

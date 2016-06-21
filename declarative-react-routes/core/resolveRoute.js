/**
 * MIT License (c) 2016-present Konstantin Tarkus <hello@tarkus.me>
 */

import React from 'react';
import matchURI from './matchURI';

function resolveRoute(routes, context) {
  for (const route of routes) {
    const params = matchURI(route, context.path);
    if (params) {
      const tasks = [
        ...Object.keys(route.fetch).map(key => fetch(route.fetch[key]).then(x => x.json())),
      ];

      if (!route.component) {
        tasks.push(route.view().then(x => {
          route.component = x.default;
        }));
      }

      return Promise.all(tasks).then(values => {
        const props = Object.keys(route.fetch).reduce((props, key, i) => {
          props[key] = values[i];
          return props;
        }, {});
        props.error = context.error;
        return React.createElement(route.component, props);
      });
    }
  }
}

export default resolveRoute;

/**
 * MIT License (c) 2016-present Konstantin Tarkus <hello@tarkus.me>
 */

const matchURI = require('./matchURI').default;

async function resolveRoute(routes, context) {
  for (const route of routes) {
    const params = matchURI(route, context.path);
    if (params) {
      const result = await route.action({...context, route, params});
      if (result) {
        return result;
      }
    }
  }
}

export default resolveRoute;

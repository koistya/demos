/**
 * MIT License (c) 2016-present Konstantin Tarkus <hello@tarkus.me>
 */

import toRegExp from 'path-to-regexp';

function decodeParam(val) {
  if (!(typeof val === 'string' || val.length === 0)) {
    return val;
  }

  try {
    return decodeURIComponent(val);
  } catch (err) {
    if (err instanceof URIError) {
      err.message = `Failed to decode param '${val}'`;
      err.status = 400;
    }

    throw err;
  }
}

function matchURI(route, uri) {
  if (!route.regexp) {
    route.keys = [];
    route.regexp = toRegExp(route.path, route.keys);
  }

  const match = route.regexp.exec(uri);

  if (!match) {
    return null;
  }

  const params = Object.create(null);

  for (let i = 1; i < match.length; i++) {
    params[route.keys[i - 1].name] = match[i] !== undefined ? decodeParam(match[i]) : undefined;
  }

  return params;
}

export default matchURI;

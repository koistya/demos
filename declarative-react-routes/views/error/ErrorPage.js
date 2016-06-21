/**
 * MIT License (c) 2016-present Konstantin Tarkus <hello@tarkus.me>
 */

import React from 'react';

const title = 'Error';

const s = {
  container: {
    padding: '40px',
  },
};

function ErrorPage({ error } = {}) {
  const title = error && error.status !== 404 ? 'Error' : 'Page Not Found';
  return (
    <div style={s.container}>
      <h1 className="mdl-typography--title">{title}</h1>
      {
        error && error.status !== 404 ?
        <div>
          <p className="mdl-typography--body-1">Oups, something went wrong.</p>
          <p className="mdl-typography--body-1">
            <pre><code>{error.stack}</code></pre>
          </p>
        </div> :
        <div>
          <p className="mdl-typography--body-1">Sorry, this page does not exist.</p>
        </div>
      }
    </div>
  )
}

export default ErrorPage;

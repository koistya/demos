/**
 * MIT License (c) 2016-present Konstantin Tarkus <hello@tarkus.me>
 */

import React from 'react';

const s = {
  container: {
    padding: '40px',
  },
};

function ErrorPage({ title, stack }) {
  return (
    <div style={s.container}>
      <h1 className="mdl-typography--title">{title}</h1>
      <p className="mdl-typography--body-1">
        <pre><code>{stack}</code></pre>
      </p>
    </div>
  )
}

export default ErrorPage;

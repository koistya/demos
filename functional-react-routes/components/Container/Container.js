/**
 * MIT License (c) 2016-present Konstantin Tarkus <hello@tarkus.me>
 */

import React from 'react';

function Container({ style = {}, ...props }) {
  return <div style={{
    ...style,
    maxWidth: '960px',
    margin: '0 auto',
  }} {...props} />;
}

export default Container;

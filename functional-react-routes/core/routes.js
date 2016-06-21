/**
 * MIT License (c) 2016-present Konstantin Tarkus <hello@tarkus.me>
 */

import React from 'react';

export default [

  {
    path: '/',
    async action({ path }) {
      console.log(`handle route for ${path}`);
      const title = 'Home Page';
      const [commits, Component] = await Promise.all([
        fetch('https://api.github.com/repos/kriasoft/react-starter-kit/commits')
          .then(resp => resp.json()),
        System.import('../views/home').then(x => x.default),
      ]);
      return { title, component: <Component title={title} commits={commits} /> }
    }
  },

  {
    path: '/about',
    async action({ path }) {
      console.log(`handle route for ${path}`);
      const title = 'About Us';
      const Component = await System.import('../views/about').then(x => x.default);
      return { title, component: <Component title={title} /> };
    }
  },

  {
    path: '/error',
    async action({ path, error }) {
      console.log(`handle route for ${path}`);
      const title = error.status === 404 ? 'Page Not Found' : 'Error';
      const Component = await System.import('../views/error').then(x => x.default);
      return { title, component: <Component title={title} stack={error.stack} /> };
    }
  }

];

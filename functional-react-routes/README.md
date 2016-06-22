# Functional React Routes

This project demonstrates how to implement imperative "functional" routes, where each route can be
represented as a combination of `path` (parametrized string) and `action` (a route handler
function) properties. This pattern is used in [React Starter Kit](https://github.com/kriasoft/react-starter-kit).
 
Here is an example of a regular route following this pattern:

```js
{
  path: '/about',
  action() {
    ReactDOM.render(<AboutPage />, container, () => {
      document.title = 'About Us';
    });
  }
}
```

Actions can be asynchronous if needed, for example:

```js
{
  path: '/:username',
  async action({ render, params }) {
    const resp = await fetch(`/api/user/${params.username}`);
    const user = await resp.json();
    if (user) {
      return render(<ProfilePage {...user} />);
    }
  }
}
```

If action method returns `null` or `undefined`, the router should attempt to find and evaluate the
next matching route from the list.

Alternatively, action methods can return plain JavaScript objects that are going to be used inside
the renderer component:

```js
{
  path: '/products',
  async action() {
    // Fetch all the required data and missing JavaScript chunks asynchronously and in parallel
    const [viewer, products, cart, ProductsList, ShoppingCart] = await Promise.all([
      fetch('/api/viewer').then(x => x.json()),
      fetch('/api/products').then(x = x.json()),
      fetch('/api/cart').then(x => x.json()),
      System.import('./components/ProductsList').then(x => x.default), // See Webpack's
      System.import('./components/ShoppingCart').then(x => x.default)  // code-splitting feature 
    ]);
    // Return result in the format (shape) that the renderer compoent understands
    // (that depends on how renderer component is implemented)
    return {
      title: 'Our Products',
      mainComponent: <ProductsList viewer={viewer} products={products} />,
      headerComponent: <ShoppingCart viewer={viewer} cart={cart} />
    };
  }
}
```

**Demo**: https://rawgit.com/koistya/demos/master/functional-react-routes/dist/


### Core Components (concepts)

- **Entry Point** (see `core/main.js`)
- **List of Routes** (see `core/routes.js`)
- **URL Matcher** (see `core/matchURI.js`)
- **Route Resolver** (see `core/resolveRoute.js`)
- **UI Components** (see `components`, `views` folders)


### How to Run

```sh
$ npm intall
$ npm run bundle
$ npm start
```


### Related Projects

* [React Starter Kit](https://github.com/kriasoft/react-starter-kit) — Isomorphic web app boilerplate (Node.js, Express, GraphQL, React)
* [ASP.NET Core Starter Kit](https://github.com/kriasoft/aspnet-starter-kit) — Single-page application boilerplate (.NET Core, C#, F#, JavaScript, Babel, React)
* [Babel Starter Kit](https://github.com/kriasoft/babel-starter-kit) — JavaScript library boilerplate (ES2015+, Babel, Rollup)
* [Universal Router](https://github.com/kriasoft/universal-router) — Isomorphic router for web and single-page applications (SPA)
* [Membership Database](https://github.com/membership/membership.db) — SQL database boilerplate for web app users, roles and auth tokens


### License

MIT License © 2016-present Konstantin Tarkus ([@koistya](https://github.com/koistya))

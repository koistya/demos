# Declarative React Routes

This project demonstrates how to implement declarative routes in React applications where the list
of routes can be represented in YAML or JSON format. This patterns is used in [ASP.NET Core Starter
Kit](https://github.com/kriasoft/aspnet-starter-kit) where the routes need to be compatible with
both JavaScript and .NET environments.
 
This list of routes may look like this: 

```yaml
-
  path: '/'
  view: './views/home'
  fetch:
    commits: 'https://api.github.com/repos/kriasoft/react-starter-kit/commits'
-
  path: '/error'
  view: './views/error'
-
  path: '/about'
  view: './views/about'
-
  path: '/tasks/new'
  view: './views/tasks/new'
-
  path: '/tasks/:status(completed|pending)?'
  view: './views/tasks'
  fetch:
    tasks: '/api/tasks?status=$status'

```

**Demo**: https://rawgit.com/koistya/demos/master/declarative-react-routes/dist/


### Core Components (concepts)

- **Declarative Routes** (see `routes.yml`)
- **Entry Point** (see `core/main.js`)
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

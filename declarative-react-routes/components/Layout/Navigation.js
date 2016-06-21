/**
 * MIT License (c) 2016-present Konstantin Tarkus <hello@tarkus.me>
 */

import React from 'react';

class Navigation extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.refs.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.refs.root);
  }

  render() {
    return (
      <nav className="mdl-navigation" ref="root">
        <a className="mdl-navigation__link" href="#/">Home</a>
        <a className="mdl-navigation__link" href="#/about">About</a>
        <a className="mdl-navigation__link" href="#/not-found">Not Found</a>
      </nav>
    );
  }

}

export default Navigation;

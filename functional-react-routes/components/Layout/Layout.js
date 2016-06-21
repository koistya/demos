/**
 * MIT License (c) 2016-present Konstantin Tarkus <hello@tarkus.me>
 */

import React from 'react';
import Header from './Header';

class Layout extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.refs.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.refs.root);
  }

  render() {
    return (
      <div className="mdl-layout mdl-js-layout" ref="root">
        <div className="mdl-layout__inner-container">
          <Header />
          <main {...this.props} />
        </div>
      </div>
    );
  }
}

export default Layout;

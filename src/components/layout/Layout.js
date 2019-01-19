// React imports
import React, { Component } from 'react';
// Routing
import Routes from '../../routes';
// Layout components
import Footer from './Footer';
import Header from './Header';
import FullscreenMenu from './FullscreenMenu';

/**
 * Global portfolio layout. Order of components matters from a CSS point of view
 */
export default class Layout extends Component {
  render() {
    return (
      <div id="root-container">
        {/* navigation menu */}
        <FullscreenMenu />
        {/* header with menu toggler */}
        <Header />
        {/* routed main content */}
        <main id="main-container">
          <Routes />
        </main>
        {/* footer */}
        <Footer />
      </div>
    );
  }
}

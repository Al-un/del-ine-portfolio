// React imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
// Routing
import Routes from '../../routes';
// Layout components
import Footer from './Footer';
import Header from './Header';
import FullscreenMenu from './FullscreenMenu';

/**
 * Link redux store state to fullscreen menu properties
 */
const mapStateToProps = state => {
  return { openedMenu: state.openedMenu };
};

/**
 * Global portfolio layout. Order of components matters from a CSS point of view
 */
class ConnectedLayout extends Component {
  render() {
    return (
      <div id="root-container" className={this.props.openedMenu ? 'show-menu' : ''}>
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

const Layout = connect(mapStateToProps)(ConnectedLayout);
export default Layout;

// React imports
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
// Routing
import Routes from '../../routes';
// Layout components
import Footer from './Footer';
import Header from './Header';
import FullscreenMenu from './FullscreenMenu';

/**
 * Link redux store state to menu showing status
 */
const mapStateToProps = state => ({ showMenu: state.showMenu });

/**
 * Global portfolio layout. Order of components matters from a CSS point of view
 */
const ConnectedLayout = props => {
  return (
    <div id="root-container" className={props.showMenu ? 'show-menu' : ''}>
      {/* navigation menu */}
      <FullscreenMenu closeMenu={props.closeMenu} />
      {/* header with menu toggler */}
      <Header toggleMenu={props.toggleMenu} />
      {/* routed main content */}
      <main id="main-container">
        <Routes />
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
};

// "withRouter" is required for connected components:
// https://stackoverflow.com/a/44666162/4906586
const Layout = withRouter(connect(mapStateToProps)(ConnectedLayout));
export default Layout;

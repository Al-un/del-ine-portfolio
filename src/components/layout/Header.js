// React import
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// Redux
import { toggleMenu } from '../../redux/root.ducks';

/**
 * Link redux actions
 */
const mapDispatchToProps = dispatch => {
  return {
    toggleMenu: () => dispatch(toggleMenu())
  };
};

/**
 * Header with logo and menu toggler
 */
const ConnectedHeader = props => {
  return (
    <header className="pf-header">
      <div className="pf-header-content">
        <div className="logo">
          <Link to="/">
            <img src="/assets/img/logo/fishlabs-logo.svg" alt="Fishlabs" />
          </Link>
        </div>
      </div>

      {/* Menu toggler with both icons */}
      <div className="menu-toggler" onClick={() => props.toggleMenu()}>
        <i className="fa fa-bars" />
        <i className="fa fa-close" />
      </div>
    </header>
  );
};

const Header = connect(
  null,
  mapDispatchToProps
)(ConnectedHeader);
export default Header;

// React import
import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
// Redux
import { toggleMenu } from '../../redux/actions';

/**
 * Link menu toggling to store
 * @param {*} dispatch
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
          <NavLink to="/">
            <img src="/assets/img/logo/fishlabs-logo.svg" alt="Fishlabs" />
          </NavLink>
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

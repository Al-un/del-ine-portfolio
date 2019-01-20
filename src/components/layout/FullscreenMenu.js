// React import
import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
// Redux
import { closeMenu } from '../../redux/root.ducks';

/**
 * Link redux actions
 */
const mapDispatchToProps = dispatch => {
  return {
    closeMenu: () => dispatch(closeMenu())
  };
};

/**
 * Fullscreen menu toggled by the menu-toggler in Header
 */
const ConnectedFullscreenMenu = props => {
  return (
    <div id="fullscreen-menu">
      <NavLink className="menu-link" onClick={() => props.closeMenu()} to="/">
        at the market
      </NavLink>
      <NavLink
        className="menu-link"
        onClick={() => props.closeMenu()}
        to="/about"
      >
        on the label
      </NavLink>
      <NavLink
        className="menu-link"
        onClick={() => props.closeMenu()}
        to="/contact"
      >
        customer service
      </NavLink>
      <div className="pusher" />
    </div>
  );
};

const FullscreenMenu = connect(
  null,
  mapDispatchToProps
)(ConnectedFullscreenMenu);
export default FullscreenMenu;

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class FullscreenMenu extends Component {
  closeMenu = () => {
    document.getElementById('root-container').classList.remove('show-menu');
  };

  render() {
    return (
      <div id="fullscreen-menu">
        <NavLink className="menu-link" onClick={() => this.closeMenu()} to="/">
          at the market
        </NavLink>
        <NavLink
          className="menu-link"
          onClick={() => this.closeMenu()}
          to="/about"
        >
          on the label
        </NavLink>
        <NavLink
          className="menu-link"
          onClick={() => this.closeMenu()}
          to="/contact"
        >
          customer service
        </NavLink>
        <div className="pusher" />
      </div>
    );
  }
}

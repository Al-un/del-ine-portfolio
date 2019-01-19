import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  toggleMenu = () => {
    document.getElementById('root-container').classList.toggle('show-menu');
  };

  render() {
    return (
      <header className="pf-header">
        <div className="pf-header-content">
          <div className="logo">
            <NavLink to="/">
              <img src="/assets/img/logo/fishlabs-logo.svg" alt="Fishlabs" />
            </NavLink>
          </div>
        </div>

        <div className="menu-toggler" onClick={() => this.toggleMenu()}>
          <i className="fa fa-bars" />
          <i className="fa fa-close" />
        </div>
      </header>
    );
  }
}

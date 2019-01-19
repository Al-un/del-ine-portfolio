import React, { Component } from 'react';
import PortfolioContainer from '../containers/PortfolioContainer';

export default class HomePage extends Component {
  render() {
    return (
      <div className="pf-page">
        <h1>interactive &amp; graphic design</h1>
        <p>
          Here is my stall, crafting unique and tailored design for all tastes.
          Enjoy your visit at the market. I'm Delphine, opened in Hong Kong and
          Paris, available for new opportunites.
        </p>
        <PortfolioContainer />
      </div>
    );
  }
}

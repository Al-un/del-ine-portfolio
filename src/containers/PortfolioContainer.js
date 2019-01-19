import React from 'react';
import { NavLink } from 'react-router-dom';
import portfolio from '../data/portfolio';

const PortfolioItem = props => {
  return (
    <div className="grid-item portfolio-item">
      <NavLink to={'/work/' + props.work.id}>
        <img
          src={'assets/img/portfolio/' + props.work.pic}
          alt={props.work.title}
        />
        <div className="grid-hover">
          <h1>{props.work.title}</h1>
          <p>{props.work.type}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default class PortfolioContainer extends React.Component {
  render() {
    return (
      <div className="grid-container">
        {portfolio.map(work => (
          <PortfolioItem work={work} key={work.id} />
        ))}
      </div>
    );
  }
}

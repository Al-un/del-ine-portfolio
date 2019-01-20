import React from 'react';
import { NavLink } from 'react-router-dom';
import portfolio from '../data/portfolio';
import PropTypes from 'prop-types';

/**
 * A single portfolio image with its text
 */
const PortfolioItem = props => {
  return (
    <div className="grid-item portfolio-item">
      <NavLink to={'/work/' + props.work.id}>
        <img
          src={'/assets/img/portfolio/' + props.work.pic}
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

// Type check
PortfolioItem.propTypes = {
  work: PropTypes.shape({
    id: PropTypes.string.isRequired,
    pic: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  })
};

/**
 * Display the whole portfolio
 */
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

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Work experiences are sorted by jobs
 * @param {*} props
 */
const WorkExpComponent = props => {
  return (
    <div>
      <h2>
        {props.work.duration}
        <br />
        {props.work.title}
      </h2>

      <ul>
        {props.work.tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

// Type check
WorkExpComponent.propTypes = {
  work: PropTypes.shape({
    duration: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tasks: PropTypes.arrayOf(PropTypes.string).isRequired
  })
};

export default WorkExpComponent;

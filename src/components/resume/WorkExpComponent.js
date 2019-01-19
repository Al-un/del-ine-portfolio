import React from 'react';

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

export default WorkExpComponent;

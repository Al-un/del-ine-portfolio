import React from 'react';
import inspirations from '../data/inspiration';

export default class InspirationContainer extends React.Component {
  render() {
    return (
      <div className="grid-container">
        {inspirations.map(inspiration => (
          <div className="grid-item" key={inspiration.file}>
            <img
              alt={inspiration.file}
              src={'assets/img/logo/' + inspiration.file}
            />
          </div>
        ))}
      </div>
    );
  }
}

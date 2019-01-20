import React from 'react';
import inspirations from '../data/inspiration';
import ImageWithLoader from '../components/ui/ImageWithLoader';

export default class InspirationContainer extends React.Component {
  render() {
    return (
      <div className="grid-container">
        {inspirations.map(inspiration => (
          <div className="grid-item" key={inspiration.file}>
            <ImageWithLoader
              alt={inspiration.file}
              src={inspiration.file}
            />
          </div>
        ))}
      </div>
    );
  }
}

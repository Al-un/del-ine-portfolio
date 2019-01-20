import React from 'react';
import PropTypes from 'prop-types';
import ImageWithLoader from '../ui/ImageWithLoader';

/**
 * Display all the photos with a full width
 * @param {*} props
 */
const FullWidthPhotoGallery = props => {
  return (
    <div>
      {props.photos.map(photo => (
        <ImageWithLoader
          src={'/assets/img/single/' + photo}
          alt={photo}
          key={photo}
        />
      ))}
    </div>
  );
};

// Type check
FullWidthPhotoGallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string).isRequired
};

/**
 * Display all the photos in a multi-columns grid
 * @param {*} props
 */
const PhotoGridGallery = props => {
  return (
    <div className="grid-container">
      {props.photos.map(photo => (
        <div className="grid-item" key={photo}>
          <ImageWithLoader src={'/assets/img/single/' + photo} alt={photo} />
        </div>
      ))}
    </div>
  );
};

// Type check
PhotoGridGallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string).isRequired
};

/**
 * Web works exposes photos will full width
 * @param {*} props
 */
const WorkComponent = props => {
  const description = Array.isArray(props.work.desc) ? (
    // multiple paragraph text
    <div>
      {props.work.desc.map((text, index) => {
        // workaround...
        if (text.tag === 'blockquote') {
          return <blockquote key={index}>{text.text}</blockquote>;
        }

        return <p key={index}>{text}</p>;
      })}
    </div>
  ) : (
    // a simple text
    <p>{props.work.desc}</p>
  );

  return (
    <div>
      <h1>{props.work.title}</h1>

      <div className="two-columns-container">
        <div className="two-columns-left">
          <p>{props.work.type}</p>
        </div>
        <div className="two-columns-right">
          {description}
          {props.work.website && (
            <p>
              <a
                href={props.work.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit website
              </a>
            </p>
          )}
        </div>
      </div>

      {props.work.photos_grid ? (
        <PhotoGridGallery photos={props.work.photos} />
      ) : (
        <FullWidthPhotoGallery photos={props.work.photos} />
      )}
    </div>
  );
};

// Type check
WorkComponent.propTypes = {
  work: PropTypes.shape({
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    website: PropTypes.string,
    photos: PropTypes.arrayOf(PropTypes.string)
  })
};

export default WorkComponent;

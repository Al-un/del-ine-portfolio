import React from 'react';

/**
 * Photo work use a multi columns grid
 * @param {*} props
 */
const PhotoWorkComponent = props => {
  const description = Array.isArray(props.work.desc) ? (
    <div>
      {props.work.desc.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </div>
  ) : (
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

      <div className="grid-container">
        {props.work.photos.map((photo, index) => (
          <div className="grid-item" key={photo}>
            <img src={'/assets/img/single/' + photo} alt={props.work.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoWorkComponent;

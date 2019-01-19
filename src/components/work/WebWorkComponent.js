import React from 'react';

/**
 * Web works exposes photos will full width
 * @param {*} props
 */
const WebWorkComponent = props => {
  const description = Array.isArray(props.work.desc) ? (
    <p>
      {props.work.desc.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </p>
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

      <div>
        {props.work.photos.map((photo, index) => (
          <img
            className="webwork-img"
            src={'/assets/img/single/' + photo}
            alt={props.work.title + ' #' + index}
            key={photo}
          />
        ))}
      </div>
    </div>
  );
};

export default WebWorkComponent;

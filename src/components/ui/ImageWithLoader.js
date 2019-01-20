import React from 'react';
import PropTypes from 'prop-types';

export default class ImageWithLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageStatus: 'loading'
    };
  }

  handleImageLoaded() {
    this.setState({ imageStatus: 'loaded' });
  }

  handleImageErrored() {
    this.setState({ imageStatus: 'failed' });
  }

  render() {
    const isLoading = this.state.imageStatus === 'loading';

    return (
      <div>
        {isLoading && <div>Loading...</div>}
        <img
          src={this.props.src}
          alt={this.props.alt}
          title={this.props.title}
          onLoad={() => this.handleImageLoaded()}
          onError={() => this.handleImageErrored()}
        />
      </div>
    );
  }
}

ImageWithLoader.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string
};

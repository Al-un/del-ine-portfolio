import React from 'react';
import PropTypes from 'prop-types';

export default class ImageWithLoader extends React.Component {
  constructor(props) {
    super(props);
    console.log(
      new Date().toISOString() + ' photo ' + props.src + ' start load'
    );
  }

  componentDidMount() {
    console.log(
      new Date().toISOString() + ' photo ' + this.props.src + ' finished'
    );
  }

  render() {
    return (
      <div>
        <img src={this.props.src} alt={this.props.alt} />
      </div>
    );
  }
}

ImageWithLoader.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string
};

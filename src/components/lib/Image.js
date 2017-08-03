import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Image extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <img src={this.props.src} alt="" height={this.props.height} width={this.props.width} />
      </div>
    );
  }
}

Image.propTypes = {
  className: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
};

export default Image;
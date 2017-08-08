import React, { Component } from 'react';
import PropTypes from 'prop-types';

class IconLink extends Component {

  render() {

    let cName = `fa fa-${this.props.name} fa-${this.props.size}`;

    return (
      <a href={this.props.link}>
        <i className={cName} style={{ color: 'white' }}></i>
      </a>
    );
  }
}

IconLink.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default IconLink;
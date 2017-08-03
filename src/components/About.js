import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Component Libs Imports:
import './lib/Image.js';
import './lib/Content.js';

// CSS Imports:
import '../main.scss';

class About extends Component {
  render() {
    return (
      <div className={this.props.className}>
        {this.props.children}
      </div>
    );
  }
}

About.propTypes = {
  className: PropTypes.string.isRequired,
};

export default About;
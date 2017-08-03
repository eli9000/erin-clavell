import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Issues extends Component {
  render() {
    return (
      <div className={this.props.className}>
        {this.props.children}
      </div>
    );
  }
}

Issues.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Issues;
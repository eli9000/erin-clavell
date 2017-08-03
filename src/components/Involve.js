import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Involve extends Component {
  render() {
    return (
      <div className={this.props.className}>
        {this.props.children}
      </div>
    );
  }
}

Involve.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Involve;
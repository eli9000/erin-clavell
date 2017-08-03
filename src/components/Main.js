import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Main extends Component {
  render() {
    return (
      <div className={this.props.className}>
        {this.props.children}
      </div>
    );
  }
}

Main.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Main;
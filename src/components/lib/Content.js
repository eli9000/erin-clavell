import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Content extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <h1>{this.props.title}</h1>
        {this.props.children}
      </div>
    );
  }
}

Content.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Content;
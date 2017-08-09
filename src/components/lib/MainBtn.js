import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MainBtn extends Component {

  render() {
    // const btnName = `main-btn-${this.props.name}`
    const iconName = `fa fa-${this.props.icon} fa-2x`
    return (
      <a href={this.props.link}>
        <button className={this.props.name}>
          <i className={iconName}></i> &nbsp; {this.props.text}
        </button>
      </a>
    );
  }
}

MainBtn.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  link: PropTypes.string.isRequired
};

export default MainBtn;
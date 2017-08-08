import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

class NavBtnTest extends Component {

  render() {
    const cName = `nav-btn-${this.props.name}`
    const link = `/${this.props.name}`;
    return (
      <NavLink exact to={link} activeClassName="active">
        <button className={cName}>{this.props.text}</button>
      </NavLink>
    );
  }
}

NavBtnTest.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default NavBtnTest;
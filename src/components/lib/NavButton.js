import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

class NavButton extends Component {
  render() {
    const link = `#${this.props.name}`;
    const cName = `nav-${this.props.name}`;
    return (
      <div className={cName}>
        <NavLink
          to={{
            hash: link,
          }}
          activeClassName="active"
          activeStyle={{
            fontWeight: 'bold',
            color: 'red'
          }}>
          <button id={this.props.name}>{this.props.text}</button>
        </NavLink>
      </div>
    );
  }
}

NavButton.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default NavButton;
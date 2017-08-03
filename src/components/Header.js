import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="header-top-row">
          <h3>Some Links? Or Contact Info</h3>
        </div>
        <div className="header-bottom-row">
          <img src="./images/ec4mayor.png" alt="" height="131.56px" />
          <h3>Some Links? Or Contact Info</h3>
        </div>
      </div>
    );
  }
}

export default Header;
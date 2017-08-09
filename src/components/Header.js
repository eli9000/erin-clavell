import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// import NavBtnTest from './lib/NavBtnTest.js';
// import IconLink from './lib/IconLink.js';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="header-image">
          <img src="./images/ec4mayor.png" alt="" height="125px" />
        </div>
        <div className="header-rows">
          <div className="header-top-row">
            <div className="header-contact">
              Call me anytime 801-232-2323
            </div>
            <div className="header-donate">
              Help our campaign and DONATE below <i className="fa fa-arrow-down fa-lg"></i>
            </div>
          </div>
          <div className="header-bottom-row">
            <div className="navbar">
              <ul>
                <li>
                  <NavLink exact to="/" activeClassName="active">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about" activeClassName="active">Meet Erin</NavLink>
                </li>
                <li>
                  <NavLink to="/issues" activeClassName="active">On the Issues</NavLink>
                </li>
                <li>
                  <NavLink to="/involve" activeClassName="active">Get Involved</NavLink>
                </li>
                <li>
                  <a href="https://www.crowdpac.com/campaigns/294125/committee-to-elect-erin-clavell">DONATE</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
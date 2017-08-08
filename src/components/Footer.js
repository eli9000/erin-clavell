import React, { Component } from 'react';
import IconLink from './lib/IconLink.js';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="copyright">
          Copyright <i className="fa fa-copyright fa-lg fa-spin"></i> 2017 by <a href="https://eli9000.com">eli9000</a> Webmaster
        </div>
        <div className="social">
          <IconLink name="facebook" size="2x" link="https://www.facebook.com/electerinclavell" />
          <IconLink name="twitter" size="2x" link="https://twitter.com/Erinclavell1" />
          <IconLink name="linkedin" size="2x" link="https://www.linkedin.com/in/erin-clavell-a8674a73/" />
          <IconLink name="usd" size="2x" link="https://www.crowdpac.com/campaigns/294125/committee-to-elect-erin-clavell" />
        </div>
      </div>
    );
  }
}

export default Footer;

//<i className="fa fa-twitter fa-4x" style={{ color: 'red' }}></i>
import React, { Component } from 'react';

import Content from './lib/Content.js';
// import RenderList from './lib/RenderList.js';
// import Image from './lib/Image.js';

// import INVOLVE from '../data/involvedata.js';
class Involve extends Component {
  render() {
    return (
      <div className="Involve" id="involve">
        <Content className="Involve-Content" title="Ways to Get Involved">
          <ul>
            <li>
              <a href="https://www.facebook.com/electerinclavell" ><i className="fa fa-facebook-official fa-2x"></i> Like us on Facebook!</a>
            </li>
            <li>
              <a href="https://twitter.com/Erinclavell1" ><i className="fa fa-twitter fa-2x"></i> Follow us on Twitter!</a>
            </li>
            <li>
              <a href="mailto:electerinclavell@gmail.com?Subject=Erin%20I%20pledge%20my%20support!" target="_top" ><i className="fa fa-user-plus fa-2x"></i> Pledge your support!</a>
            </li>
            <li>
              <a href="https://www.crowdpac.com/campaigns/294125/committee-to-elect-erin-clavell" ><i className="fa fa-money fa-2x"></i> Donate to our campaign!</a>
            </li>
          </ul>
        </Content>
      </div>
    );
  }
}

export default Involve;
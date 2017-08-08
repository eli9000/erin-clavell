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
              <a href="fb" ><i className="fa fa-facebook-official fa-2x"></i> Help by 'liking' us on Facebook!</a>
            </li>
            <li>
              <a href="fb" ><i className="fa fa-twitter fa-2x"></i> Help by 'liking' us on Facebook!</a>
            </li>
            <li>
              <a href="fb" ><i className="fa fa-instagram fa-2x"></i> Help by 'liking' us on Facebook!</a>
            </li>
          </ul>
        </Content>
      </div>
    );
  }
}

export default Involve;
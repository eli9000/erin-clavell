import React, { Component } from 'react';

import Content from './lib/Content.js';
import RenderList from './lib/RenderList.js';
import Image from './lib/Image.js';

import ABOUT from '../data/aboutdata.js';
class About extends Component {
  render() {
    return (
      <div className="About" id="about">
        <Content className="About-Content" title="About Me">
          <RenderList className="RenderList-About" data={ABOUT} />
        </Content>
        <Image className="About-Image" src="/images/ec-about.jpg" height="auto" width="60%" />
      </div>
    );
  }
}

export default About;
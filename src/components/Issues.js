import React, { Component } from 'react';

import Content from './lib/Content.js';
import RenderList from './lib/RenderList.js';
import Image from './lib/Image.js';

import ISSUES from '../data/issuesdata.js';
class Issues extends Component {
  render() {
    return (
      <div className="Issues" id="issues">
        <Content className="Issues-Content" title="On the Issues">
          <RenderList className="RenderList-Issues" data={ISSUES} />
        </Content>
        <Image className="Issues-Image" src="/images/ec-transparent.png" />
      </div>
    );
  }
}

export default Issues;
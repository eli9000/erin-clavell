import React, { Component } from 'react';

import Content from './lib/Content.js';
import RenderList from './lib/RenderList.js';

import VOWS from '../data/vowsdata.js';

class Main extends Component {
  render() {
    return (
      <div className="Main" id="main">
        <div className="Main-Quote">
          Erin Clavell for Mayor of West Jordan<br />
          Commitment to Community
        </div>
        <div className="endorsements">
          <p>
            “Erin is dedicated to listen and represent the people of West Jordan. Her values strongly follow bettering our environment and education.”  Brooke Kirschenbaum Cousino
          </p>
          <p>
            "I couldn't be more excited to see Erin Clavell get elected. We need intelligent, compassionate, curious hard working people working on our behalf."  Joi Willis
          </p>
          <p>
            “She is an incredible person, has always cared for everyone. Has always worked hard and always excepts challenges.” Jody Lee Woodard
          </p>
        </div>
        <Content className="Main-Content" title="As Mayor I vow to:">
          <RenderList className="RenderList-Main" data={VOWS} />
        </Content>
      </div>
    );
  }
}

export default Main;


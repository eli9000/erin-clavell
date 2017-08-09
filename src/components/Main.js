import React, { Component } from 'react';

// import Content from './lib/Content.js';
// import RenderList from './lib/RenderList.js';
// import MainBtn from './lib/MainBtn.js';


class Main extends Component {
  render() {
    return (
      <div className="Main" id="main">
        <div className="Main-Quote">
          Commitment to Community
        </div>
        <div className="endorsements">
          <p>
            <i className="fa fa-quote-left"></i> I couldn't be more excited to see Erin Clavell get elected. We need intelligent, compassionate, curious hard working people working on our behalf <i className="fa fa-quote-right"></i> &nbsp; <strong>Joi Willis</strong>
          </p>
        </div>
        <div className="help">
          <ul>
            <li>
              <a href="https://www.crowdpac.com/campaigns/294125/committee-to-elect-erin-clavell">
                <i className="fa fa-money fa-2x"></i>&nbsp; CONTRIBUTE TO OUR CAMPAIGN
              </a>
            </li>
            <li>
              <a href="mailto:electerinclavell@gmail.com?Subject=Erin%20I%20pledge%20my%20support!">
                <i className="fa fa-user-plus fa-2x"></i>&nbsp; PLEDGE YOUR SUPPORT
              </a>
            </li>
            <li>
              <a href="mailto:electerinclavell@gmail.com?Subject=Erin%20I%20want%20to%20volunteer!">
                <i className="fa fa-hand-paper-o fa-2x"></i>&nbsp; VOLUNTEER YOUR TIME
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Main;

// <div className="volunteer">
//   <i className="fa fa-hand-paper-o fa-2x"></i>&nbsp; Volunteer
//           </div>
//   <div className="pledge">
//     <i className="fa fa-user-plus fa-2x"></i>&nbsp; Pledge
//           </div>
//   <div className="donate">
//     <i className="fa fa-money fa-2x"></i>&nbsp; Contribute
//           </div>
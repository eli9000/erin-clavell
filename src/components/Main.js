import React, { Component } from 'react';

import '../main.scss';

class Main extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <h1>{this.props.className}</h1>
      </div>
    );
  }
}

export default Main;
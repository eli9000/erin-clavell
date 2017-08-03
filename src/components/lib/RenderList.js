import React, { Component } from 'react';
import PropTypes from 'prop-types';


class RenderList extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <ul>
          {this.props.data.map(e =>
            <li key={e.id}><strong>{e.title}</strong>{e.text}</li>)}
        </ul>
      </div>
    );
  }
}

RenderList.propTypes = {
  className: PropTypes.string.isRequired,
  data: PropTypes.func,
};

export default RenderList;
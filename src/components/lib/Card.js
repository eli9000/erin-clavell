import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Card extends Component {
  render() {

    const altClass = `card-${this.props.class}`

    return (
      <div className="card 
    );
  }
}

Card.propTypes = {
  class: PropTypes.string,
};

export default Card;
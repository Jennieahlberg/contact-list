import React, { Component } from 'react';
import './card.css';

class Card extends Component {

  render() {
    return (
      <div>
        <div className="card-container">
          <div className="card">
            <div className="front">
              <p>{this.props.name}</p>
            </div>
            <div className="back">
              <p>{this.props.number}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card;

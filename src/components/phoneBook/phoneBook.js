import React, { Component } from 'react';
import './phoneBook.css';
import Card from '../card/card';
import SearchField from '../searchField/searchField';

class GameBoard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cards: [1, 2, 3],
      contacts: []
    }
  }

  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((json) => {
        this.setState({ contacts: json });
      });
  }

  render() {
    return (
      <div>
        <div>
          <SearchField />
        </div>
        <div className="cards-container">
          {this.state.contacts.map((data, index) => {
            return <Card key={index} name={data.name} number={data.phone} />
          })}
        </div>
      </div>
    )
  }
}

export default GameBoard;

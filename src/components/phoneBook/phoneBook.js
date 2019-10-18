import React, { Component } from 'react';
import './phoneBook.css';
import Card from '../card/card';
import SearchField from '../searchField/searchField';

class GameBoard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contacts: [],
      searchText: ''
    }
  }

  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((json) => {
        this.setState({ contacts: json });
      });
  }


  handleInput = (searchText) => {
    this.setState({searchText: searchText});

    
  }

  render() {
    return (
      <div>
        <div>
          <SearchField searchContact={this.handleInput}/>
        </div>
        <div className="cards-container">
          {this.state.contacts.map((data, index) => {
            return <Card key={index} name={data.name} number={data.phone} email={data.email}/>
          })}
        </div>
      </div>
    )
  }
}

export default GameBoard;

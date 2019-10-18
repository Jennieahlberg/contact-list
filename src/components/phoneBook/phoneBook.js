import React, { Component } from 'react';
import './phoneBook.css';
import Card from '../card/card';
import SearchField from '../searchField/searchField';

class PhoneBook extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contacts: [],
      searchText: '',
      updatedList: []
    }
  }

  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((json) => {
        this.setState({ contacts: json, updatedList: json });
      });
  }

  searchContact = (event) => {
    this.setState({ searchText: event });
    var updatedList = this.state.contacts;
    updatedList = updatedList.filter(function (item) {
      return item.name.toLowerCase().search(event.toLowerCase()) !== -1;
    });
    this.setState({ updatedList: updatedList });
  }

  render() {
    return (
      <div>
        <div>
          <SearchField searchContact={this.searchContact} />
        </div>
        <div className="cards-container">
          {this.state.updatedList.map((data, index) => {
            return <Card key={index} name={data.name} number={data.phone} email={data.email} />
          })}
        </div>
      </div>
    )
  }
}

export default PhoneBook;

import React, { Component } from 'react';
import './searchField.css';

class SearchField extends Component {

  handleInput = (searchText) => {
    searchText.preventDefault();
    this.props.searchContact(searchText.target.value);
  }

  render() {
    return (
      <div>
        <input placeholder="Search contact" onChange={searchText => this.handleInput(searchText)} />
      </div>
    )
  }
}

export default SearchField;

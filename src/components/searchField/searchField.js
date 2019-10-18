import React, { Component } from 'react';
import './searchField.css';

class SearchField extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }

  handleInput = (searchText) => {
    this.props.searchContact(searchText.target.value);
  }
  

  render() {
    return (
      <div>
        <input placeholder="Search contact" onChange={searchText => this.handleInput(searchText)}/>
      </div>
    )
  }
}

export default SearchField;

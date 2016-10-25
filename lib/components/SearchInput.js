import React from 'react';


class SearchInput extends React.Component {

  render() {
    return(
      <input
        // maxLength = '140'
        id='inputField'
        placeholder="Filter"
        onChange= { event => {this.props.searchMessages(event)} }
      />
    )
  }
}

module.exports = SearchInput;

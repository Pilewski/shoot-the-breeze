import React from 'react';


class SearchInput extends React.Component {

  render() {
    return(
      <input
        id='searchField'
        placeholder="Filter"
        onChange= { event => {this.props.searchMessages(event)} }
      />
    )
  }
}

module.exports = SearchInput;

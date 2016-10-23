import React from 'react';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput : '',
    };
  }
  getMessage(event) {
    const userSearch = event.target.value;
    this.setState({ userInput: userSearch});
    console.log(this.state.userInput);
  }
  searchMessages(userInput) {
    this.props.messages.filter(m => m === userInput);
    
  }
  render(){
    return (
      <input
        // maxLength = '140'
        id='inputField'
        placeholder="Message…"
        value= {this.state.message}
        onChange= { event => {this.props.getMessage(event); this.searchMessages(this.state.userInput)}}
        />
    )
  }

}

module.exports = Search;

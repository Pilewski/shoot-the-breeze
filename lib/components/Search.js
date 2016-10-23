import React from 'react';
import { filter } from 'lodash';


class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput : '',
      filteredMessages : []
    };
  }
  getMessage(event) {
    const userSearch = event.target.value;
    this.setState({ userInput: userSearch});
  }
  searchMessages(userInput) {
    let filteredMessages = filter(this.props.messages, {'content': userInput});
    this.setState({ filteredMessages: filteredMessages });
    console.log(this.props.messages);
    console.log(this.state);
  }
  render(){
    let messageField;
    if (this.state.filteredMessages.length) {
      messageField = (<ul>{this.state.filteredMessages.map(m => <li key={m.key}>{m.createdAt}{m.user.displayName} <br />{m.content }</li>)}</ul>);
    } else {
      messageField = (<ul>{this.props.messages.map(m => <li key={m.key}>{m.createdAt}{m.user.displayName} <br />{m.content }</li>)}</ul>);
    }

    return (
      <div>
      <input
        // maxLength = '140'
        id='inputField'
        placeholder="Message…"
        value= {this.state.message}
        onChange= { event => {this.getMessage(event); this.searchMessages(this.state.userInput)}}
        />
        {messageField}
      </div>
    )
  }

}

module.exports = Search;

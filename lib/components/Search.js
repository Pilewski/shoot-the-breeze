import React from 'react';
import Sort from './Sort';
import { filter } from 'lodash';


class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput : '',
      filteredMessages : [],
      reversed: false
    };
  }
  // filterByUser(user) {
  // }
  getMessage(event) {
    const userSearch = event.target.value;
    this.setState({ userInput: userSearch});
  }
  searchMessages() {
    let userInput = this.state.userInput.toLowerCase();
    let filteredMessages = filter(this.props.messages, (m) =>  {
      return m.content.toLowerCase().includes(userInput);
    });
    this.setState({filteredMessages : filteredMessages});
  }
  toggleSort(order) {
    order === 'up' ? this.setState({reversed: true}) : this.setState({reversed: false});
  }
  render(){
    let messageField;
    if (this.state.filteredMessages.length && !this.state.reversed) {
      messageField = (<ul>{this.state.filteredMessages.map(m => <li key={m.key}>{m.createdAt}{m.user.displayName} <br />{m.content }</li>).reverse()}</ul>);
    } else if (this.state.filteredMessages.length){
      messageField = (<ul>{this.state.filteredMessages.map(m => <li key={m.key}>{m.createdAt}{m.user.displayName} <br />{m.content }</li>)}</ul>);
    } else if (!this.state.reversed) {
        messageField = (<ul>{this.props.messages.map(m => <li key={m.key}>{m.createdAt}{m.user.displayName} <br />{m.content }</li>).reverse()}</ul>)
      } else if (this.state.userInput.length) {
      messageField = ''
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
        onChange= { event => {this.getMessage(event);      this.searchMessages()}}
        />
        <Sort sort={this.toggleSort.bind(this)}/>
        {messageField}
      </div>
    )
  }

}

module.exports = Search;

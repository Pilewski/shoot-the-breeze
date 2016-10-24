import React from 'react';
import Sort from './Sort';
import SearchInput from './SearchInput'
import { filter } from 'lodash';


class MessageField extends React.Component {
  constructor() {
    super();
    this.state = {
      filteredMessages : [],
      reversed: false,
      userInput: ''
    };
  }
  searchMessages(event) {
    let userInput = event.target.value.toLowerCase();
    let filteredMessages = filter(this.props.messages, (m) =>  {
      return m.content.toLowerCase().includes(userInput);
    });
    this.setState({filteredMessages : filteredMessages})
    this.setState({userInput: userInput});
    console.log(this.state.userInput);
    console.log(this.state.filteredMessages)
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
    } else if (this.state.userInput !== '') {
      messageField = '';
    } else if (!this.state.reversed) {
      messageField = (<ul>{this.props.messages.map(m => <li key={m.key}>{m.createdAt}{m.user.displayName} <br />{m.content }</li>).reverse()}</ul>);
    } else {
      messageField = (<ul>{this.props.messages.map(m => <li key={m.key}>{m.createdAt}{m.user.displayName} <br />{m.content }</li>)}</ul>);
    }


    return (
      <div>

      <SearchInput searchMessages= { this.searchMessages.bind(this) } />
        <Sort sort={this.toggleSort.bind(this)}/>
        {messageField}
      </div>
    )
  }

}

module.exports = MessageField;

import React from 'react';
import Sort from './Sort';
import SearchInput from './SearchInput';
import Users from './Users';
import { filter, map } from 'lodash';


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
  }
  toggleSort(order) {
    order === 'up' ? this.setState({reversed: true}) : this.setState({reversed: false});
  }

  resetFilteredMessages() {
    this.setState({filteredMessages: []});
  }

  filterByUser(userName) {
    let filteredMessages = filter(this.props.messages, (m) => {
      return m.user.displayName.includes(userName);
    });
    this.setState({ filteredMessages: filteredMessages });
  }
  render() {
    let messageField;
    if (this.state.filteredMessages.length && !this.state.reversed) {
      messageField = (<ul>{this.state.filteredMessages.map(m => <li key={m.key}>{m.createdAt}{m.user.displayName.split(' ').shift()} <br />{m.content }</li>).reverse()}</ul>);
    } else if (this.state.filteredMessages.length){
      messageField = (<ul>{this.state.filteredMessages.map(m => <li key={m.key}>{m.createdAt}{m.user.displayName.split(' ').shift()} <br />{m.content }</li>)}</ul>);
    } else if (this.state.userInput !== '') {
      messageField = '';
    } else if (!this.state.reversed) {
      messageField = (<ul>{this.props.messages.map(m => <li key={m.key}>{m.createdAt}{m.user.displayName.split(' ').shift()} <br />{m.content }</li>).reverse()}</ul>);
    } else {
      messageField = (<ul>{this.props.messages.map(m => <li key={m.key}>{m.createdAt}{m.user.displayName.split(' ').shift()} <br />{m.content }</li>)}</ul>);
    }


    return (
      <div>
        <button onClick= {() => this.resetFilteredMessages()}> SHÖØT DA BREEZE</button>
        <SearchInput searchMessages= { this.searchMessages.bind(this) } />
        <Sort sort={this.toggleSort.bind(this)} />
        {messageField}
        <Users messages={this.props.messages} filterByUser={this.filterByUser.bind(this)} />
      </div>

    )
  }

}

module.exports = MessageField;

import React from 'react';
import Sort from './Sort';
import SearchInput from './SearchInput';
import Users from './Users';
import Message from './Message';
import { filter, map } from 'lodash';
import firebase, { reference, signIn, signOut } from '../firebase';

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
    return (
      <div>
        <header>
          <button id='titleButton' onClick= {() => this.resetFilteredMessages()}> SHÖØT DA BREEZE</button>
          <SearchInput searchMessages= { this.searchMessages.bind(this) } />
          <Sort sort={this.toggleSort.bind(this)} />
        </header>
        <Message messages={this.props.messages} reversed={this.state.reversed} userInput={this.state.userInput} filteredMessages={this.state.filteredMessages}/>
        <Users messages={this.props.messages} filterByUser={this.filterByUser.bind(this)} />
      </div>
    )
  }

}

module.exports = MessageField;

import React, { Component } from 'react';
import { pick, map, extend, uniq } from 'lodash';
import firebase, { reference, signIn, signOut } from '../firebase';
import MessageInput from './MessageInput';
import Users from './Users';
import Search from './Search';
import moment from 'moment';

// Very few things in this component are a good idea.
// Feel free to blow it all away.

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      draftMessage: '',
      filteredMessages: [],
      user: null
    };
  }

  componentDidMount() {
    reference.limitToLast(100).on('value', (snapshot) => {
      const messages = snapshot.val() || {};
      this.setState({
        messages: map(messages, (val, key) => extend(val, { key }))
      });
    });
    firebase.auth().onAuthStateChanged(user => this.setState({ user }));
  }

  addNewMessage() {
    const { user, draftMessage } = this.state;
    reference.push({
      user: pick(user, 'displayName', 'email', 'uid'),
      content: draftMessage,
      createdAt: moment().format("MMMM D, hh:mm ")
    });
  }

  getMessage(event) {
    const userMessage = event.target.value;
    this.setState({ draftMessage: userMessage });
  }

  sortMessage() {

  }

  render() {
    let { user, messages, filteredMessages, draftMessage } = this.state;
    let messageField;
    if (this.state.filteredMessages.length) {
      messageField = (<ul>{filteredMessages.map(m => <li key={m.key}>{m.createdAt}{m.user.displayName} <br />{m.content }</li>)}</ul>);
    } else {
      messageField = (<ul>{this.state.messages.map(m => <li key={m.key}>{m.createdAt}{m.user.displayName} <br />{m.content }</li>)}</ul>);
    }

    return (
      <div className="Application">
        { user ? <p> Logged in as {user.displayName} ({user.email}) </p> : <button onClick={() => signIn()}>Sign In</button> }
        <Search getMessage={this.getMessage.bind(this)} messages={this.state.messages}/>
        { !user ? <p>Hello </p> : <button onClick={() => signOut()}>Sign Out</button> }
        {messageField}
        <Users messages={this.state.messages} />
        <MessageInput addNewMessage={this.addNewMessage.bind(this)}  getMessage={this.getMessage.bind(this)} />
      </div>
    )
  }
}

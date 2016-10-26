import React, { Component } from 'react';
import { pick, map, extend, uniq } from 'lodash';
import firebase, { reference, signIn, signOut } from '../firebase';
import MessageInput from './MessageInput';
import MessageField from './MessageField';
import moment from 'moment';

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

  render() {
    let { user, messages, draftMessage } = this.state;

    return (
      <div className="Application">
        <MessageField user={user} getMessage={this.getMessage.bind(this)} messages={messages}/>
        <MessageInput user={user} addNewMessage={this.addNewMessage.bind(this)}  getMessage={this.getMessage.bind(this)} />
      </div>
    )
  }
}

import React, { Component } from 'react';
import { pick, map, extend } from 'lodash';
import firebase, { reference, signIn, signOut } from '../firebase';
import MessageInput from './MessageInput';
import Users from './Users';

// Very few things in this component are a good idea.
// Feel free to blow it all away.

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      draftMessage: '',
      user: null,
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

    let inputField;
    if (document.getElementById(inputField)){
      return document.getElementById(inputField);
    }
  }

  addNewMessage() {
    const { user, draftMessage } = this.state;

    reference.push({
      user: pick(user, 'displayName', 'email', 'uid'),
      content: draftMessage,
      createdAt: Date.now()
    });

    this.setState({ draftMessage: '' });
  }

  getMessage(event) {
    const userMessage = event.target.value;
    this.setState({ draftMessage: userMessage });
  }

  render() {
    let { user, messages, draftMessage } = this.state;
    return (
      <div className="Application">
        { user ? <p>Hello {user.displayName} </p> : <button onClick={() => signIn()}>Sign In</button> }
        { !user ? <p>Hello </p> : <button onClick={() => signOut()}>Sign Out</button> }
        <ul>
          { this.state.messages.map(m => <li key={m.key}>{m.user.displayName}: {m.content }</li>) }
        </ul>
        <MessageInput addNewMessage={this.addNewMessage.bind(this)}  getMessage={this.getMessage.bind(this)} />
        {/* <Users user={user.displayName.bind(this)}/> */}
      </div>
    )
  }
}

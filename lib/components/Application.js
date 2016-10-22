import React, { Component } from 'react';
import { pick, map, extend, uniq } from 'lodash';
import firebase, { reference, signIn, signOut } from '../firebase';
import MessageInput from './MessageInput';
import Users from './Users';
import moment from 'moment';

// Very few things in this component are a good idea.
// Feel free to blow it all away.

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      draftMessage: '',
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
    let userArray = uniq(this.state.messages.map(m => m.user.displayName));
    // if (firebase.auth().currentUser !== null) {
    //   console.log(firebase.auth().currentUser.displayName);
    // }
    return (
      <div className="Application">
        { user ? <p> Logged in as {user.displayName} ({user.email}) </p> : <button onClick={() => signIn()}>Sign In</button> }
        { !user ? <p>Hello </p> : <button onClick={() => signOut()}>Sign Out</button> }
        <ul>
          { this.state.messages.map(m => <li key={m.key}>{m.createdAt}{m.user.displayName}: {m.content }</li>) }
        </ul>
        <section>
          { userArray }
        </section>
        <MessageInput addNewMessage={this.addNewMessage.bind(this)}  getMessage={this.getMessage.bind(this)} />
      </div>
    )
  }
}

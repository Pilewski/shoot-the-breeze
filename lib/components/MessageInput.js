import React from 'react';
import SubmitButton from './SubmitButton';

class MessageInput extends React.Component {
  constructor() {
    super();
    this.state = {
      message : ''
    };
  }

  getMessage(event) {
    const userMessage = event.target.value;
    this.setState({ message: userMessage });
  }

  charCounter() {
    return (
      <div id="char-counter"> Char left: {140 - this.state.message.length} </div>
    )
  }

  render() {

    return (
      <div className="MessageInput">
      <input
        id='inputField'
        placeholder="Message…"
        value= {this.state.message}
        onChange= { event => {this.props.getMessage(event); this.getMessage(event)}}
        />
        {this.charCounter()}
        <SubmitButton message={this.state.message} addNewMessage={this.props.addNewMessage} />
      <button disabled= {!this.state.message }
      onClick= { () => {this.setState({message: ''})}} > Clear </button>
      </div>
    );
  }
}

module.exports = MessageInput;

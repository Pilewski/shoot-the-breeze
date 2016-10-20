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

  render() {

    return (
      <div className="MessageInput">
      <input
        id='inputField'
        placeholder="Message…"
        onChange= { event => {this.props.getMessage(event); this.getMessage(event)}}
        />
        <charCounter message = {this.state.message} />
        <SubmitButton addNewMessage = {this.props.addNewMessage} />
      <button onClick= { () => document.getElementById('inputField').value = ''}> Clear </button>
      </div>
    );
  }
}

const charCounter = (props) => {
  const { message } = props;
  return (
    <div> {message.length} </div>
  )
}


module.exports = MessageInput;

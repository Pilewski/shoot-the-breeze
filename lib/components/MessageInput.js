import React from 'react';
import SubmitButton from './SubmitButton';

class MessageInput extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="MessageInput">
      <input
        id='inputField'
        placeholder="Message…"
        onChange= { event => this.props.getMessage(event) } />
        <SubmitButton addNewMessage={this.props.addNewMessage} />
      <button onClick= { () => document.getElementById('inputField').value = ''}> Clear </button>
      </div>
    );
  }
}


module.exports = MessageInput;

import React from 'react';

class MessageInput extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="MessageInput">
      <h1> Sup Ho </h1>
      <input
        id='inputField'
        placeholder="Message…"
        onChange={ event => this.props.getMessage(event) } />
      </div>
    );
  }
}


module.exports = MessageInput;

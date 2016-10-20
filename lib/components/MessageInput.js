import React from 'react';

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
        onChange={ event => this.props.getMessage(event) } />
      </div>
    );
  }
}


module.exports = MessageInput;

import React from 'react';
import SubmitButton from './SubmitButton';
import CharCounter from './CharCounter';

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
          maxLength='140'
          id='inputField'
          placeholder="Message"
          value= {this.state.message}
          onChange= { event => {this.props.getMessage(event); this.getMessage(event)}}
        />
        <CharCounter message={this.state.message} />
        <SubmitButton message={this.state.message} addNewMessage={this.props.addNewMessage} />
        <button className='Button' disabled= {!this.state.message }
        onClick= { () => {this.setState({message: ''})}} > Clear </button>
      </div>
    );
  }
}

module.exports = MessageInput;

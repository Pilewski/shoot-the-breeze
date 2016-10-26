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
      <span>
        <div className='UserOnline'>
          { this.props.user ? <p className='WelcomeText'> Logged in as <span className='LogName'> {this.props.user.displayName}</span> ({this.props.user.email}) </p> : <button id='LogInBtn' className='Button' onClick={() => signIn()}>Sign In</button> }
        </div>
        <form className="MessageInput">
          <input
            maxLength='140'
            id='inputMessage'
            placeholder="Message"
            value= {this.state.message}
            onChange= { event => {this.props.getMessage(event); this.getMessage(event)}}
          />
          <CharCounter message={this.state.message} />
          <SubmitButton message={this.state.message} addNewMessage={this.props.addNewMessage} />
          <button id='clearBtn' className='Button' disabled= {!this.state.message }
          onClick= { () => {this.setState({message: ''})}} > Clear </button>
        </form>
      </span>
    );
  }
}

module.exports = MessageInput;

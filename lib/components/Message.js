import React from 'react';
import { filter, map } from 'lodash';

class Message extends React.Component {
  constructor(){
    super();
  }
  render(){
    let messageField;
    if (this.props.filteredMessages.length && !this.props.reversed) {
      messageField = (<ul className='MessageField'>{this.props.filteredMessages.map(m => <li key={m.key}><span className='date'>{m.createdAt}</span><span className='date-mobile'>{m.createdAtMobile}</span><span className='userName'>{m.user.displayName.split(' ').shift()}</span> <p className='messageContent'>{m.content }</p></li>).reverse()}</ul>);
    } else if (this.props.filteredMessages.length){
      messageField = (<ul className='MessageField'>{this.props.filteredMessages.map(m => <li key={m.key}><span className='date'>{m.createdAt}</span><span className='date-mobile'>{m.createdAtMobile}</span><span className='userName'>{m.user.displayName.split(' ').shift()}</span> <p className='messageContent'>{m.content }</p></li>)}</ul>);
    } else if (this.props.userInput !== '') {
      messageField = '';
    } else if (!this.props.reversed) {
      messageField = (<ul className='MessageField'>{this.props.messages.map(m => <li key={m.key}><span className='date'>{m.createdAt}</span><span className='date-mobile'>{m.createdAtMobile}</span><span className='userName'>{m.user.displayName.split(' ').shift()}</span> <p className='messageContent'>{m.content }</p></li>).reverse()}</ul>);
    } else {
      messageField = (<ul className='MessageField'>{this.props.messages.map(m => <li key={m.key}><span className='date'>{m.createdAt}</span><span className='date-mobile'>{m.createdAtMobile}</span><span className='userName'>{m.user.displayName.split(' ').shift()}</span> <p className='messageContent'>{m.content }</p></li>)}</ul>);
    }

    return (
      <span>
        {messageField}
      </span>
    )
  }
}

module.exports = Message;

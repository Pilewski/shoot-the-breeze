import React from 'react';

const SubmitButton = (props) => {
  const { addNewMessage, message } = props;
  return (
    <button id='SubmitBtn' className='Button' disabled = { !message.length || (message.length >= 140) } onClick = {() => addNewMessage()} > Submit </button>
  )
}


module.exports = SubmitButton;

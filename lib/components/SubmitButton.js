import React from 'react';

const SubmitButton = (props) => {
  const { addNewMessage } = props;
  return (
    <button onClick = {() => addNewMessage()} > Submit </button>
  )
}

module.exports = SubmitButton

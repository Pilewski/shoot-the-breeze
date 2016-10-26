import React from 'react';

class CharCounter extends React.Component {
  render() {
    return (
      <span id="charCounter"> {140 - this.props.message.length} </span>
    )
  }
}

module.exports = CharCounter;

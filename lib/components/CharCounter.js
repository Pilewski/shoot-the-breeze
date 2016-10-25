import React from 'react';

class CharCounter extends React.Component {
  render() {
    return (
      <div id="charCounter"> Char left: {140 - this.props.message.length} </div>
    )
  }
}

module.exports = CharCounter;

import React from 'react';

class Sort extends React.Component {
  render(){
    return (
      <div>
        <button onClick={() => this.props.sort('up')}>sort up!</button>
        <button onClick={() => this.props.sort('down')}>sort down!</button>
      </div>
    )
  }
}

module.exports = Sort;

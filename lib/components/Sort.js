import React from 'react';

class Sort extends React.Component {
  render(){
    return (
      <div>
        <button className='sort-up' onClick={() => this.props.sort('up')}>sort up!</button>
        <button className='sort-down' onClick={() => this.props.sort('down')}>sort down!</button>
      </div>
    )
  }
}

module.exports = Sort;

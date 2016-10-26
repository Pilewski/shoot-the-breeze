import React from 'react';

class Sort extends React.Component {
  render(){
    return (
      <span className='sortContainer'>
        <button className='Button' id='sortUpBtn' onClick={() => this.props.sort('up')}>sort &uarr;</button>
        <button className='Button' id='sortDownBtn' onClick={() => this.props.sort('down')}>sort &darr;</button>
      </span>
    )
  }
}

module.exports = Sort;

import React from 'react';

class Sort extends React.Component {
  render(){
    return (
      <div>
        <button className='Button' id='sortUpBtn' onClick={() => this.props.sort('up')}>sort &uarr;</button>
        <button className='Button' id='sortDownBtn' onClick={() => this.props.sort('down')}>sort &darr;</button>
      </div>
    )
  }
}

module.exports = Sort;

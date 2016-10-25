import React from 'react';

class Sort extends React.Component {
  render(){
    return (
      <div>
        <button className='Button' id='sort-up' onClick={() => this.props.sort('up')}>sort &uarr;</button>
        <button className='Button' id='sort-down' onClick={() => this.props.sort('down')}>sort &darr;</button>
      </div>
    )
  }
}

module.exports = Sort;

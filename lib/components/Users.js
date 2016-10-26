import React from 'react';
import { uniqBy, sortedUniqBy, uniq, map, mapValues, extend } from 'lodash';

class Users extends React.Component {

  render() {

    let users = (<ul className='UserList'>{this.props.messages.map(m => <li key={m.user.uid}><button className='UserBtn' onClick= {() => {this.props.filterByUser(m.user.displayName)}}>{m.user.displayName.split(' ').shift()}</button> {m.user.email}</li>)}</ul>);

    return (
      <aside>
        <h4> Users </h4>
        <div> {users} </div>
      </aside>
    )
  }
}

module.exports = Users;

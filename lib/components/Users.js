import React from 'react';
import { uniqBy, sortedUniqBy, uniq, map, mapValues, extend } from 'lodash';

class Users extends React.Component {

  render() {

    let users = (<ul>{this.props.messages.map(m => <li key={m.user.uid}><button onClick= {() => {this.props.filterByUser(m.user.displayName)}}>{m.user.displayName}</button>{m.user.email}</li>)}</ul>);

    return (
      <section>
        <div> {users} </div>
      </section>
    )
  }
}


module.exports = Users;

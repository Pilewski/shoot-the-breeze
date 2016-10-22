import React from 'react';
import { pick, map, extend, uniq } from 'lodash';

class Users extends React.Component {
  render() {
    let userArray = uniq(this.props.messages.map(m => <li key={m.key}>{m.user.displayName} {m.user.email}</li>));
    // let renderUsers = userArray.join(' ');

    return (
      <section>
        { userArray }
      </section>
    );
  }
}


module.exports = Users;

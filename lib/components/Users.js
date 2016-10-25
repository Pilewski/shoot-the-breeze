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


  // getInfo(userInfo) {
  //   let infoArray = [];
  //   for (var i = 0; i < userInfo.length; i++) {
  //     for (var j =0; j < userInfo[i].length; j++) {
  //         infoArray.push(userInfo[j][i]);
  //     }
  //   }
  //   return infoArray.join(' ');
  // }




  // let userName = uniq(<ul>{this.props.messages.map(m => <a key={m.key}>{m.user.displayName.split(' ').shift()} {m.user.email}</a>)}</ul>);
  //
  //
  // let userNamez = uniq(this.props.messages.map(m => m.user.displayName));
  // let userEmail = uniq(this.props.messages.map(m => m.user.email));
  // let userInfo = [userName, userEmail];
  //   return {
  //     userName: m.user.displayName,
  //     id: m.user.uid,
  //     email: m.user.email
  //   };
  //   debugger;
  //   let findUser = uniqBy(users, 'id');
  //   return sortedUniqBy(findUser,'userName')

import React from 'react';
import { uniq, map, mapValues, extend } from 'lodash';

class Users extends React.Component {

  getInfo(userInfo) {
    let infoArray = [];
    for (var i = 0; i < userInfo.length; i++) {
      for (var j =0; j < userInfo[i].length; j++) {
          infoArray.push(userInfo[j][i]);
      }
    }
    return infoArray.join(' ');
  }

  render() {
    let userName = uniq(this.props.messages.map(m => m.user.displayName));
    let userEmail = uniq(this.props.messages.map(m => m.user.email));
    let userInfo = [userName, userEmail];

    return (
      <section>
        <div> {this.getInfo(userInfo)} </div>
      </section>
    );
  }
}


module.exports = Users;

import React from 'react';

class Users extends React.Component {
  render() {
    return (
      <section>
        { this.props.user ? <p>{this.props.user.displayName} </p> : '' }
      </section>
    );
  }
}


module.exports = Users;

import React from 'react';

const Users = (props) => {
  const { user } = props;
  return (
    <section>
      {user}
    </section>
  )
}


module.exports = Users;

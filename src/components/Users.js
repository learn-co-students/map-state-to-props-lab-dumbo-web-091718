import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {

  let arrayOfUsers = this.props.users.map((user) => { return <li key={user.id}>{user.username} - {user.hometown}</li>})
    // console.log(this.props.users)
    return (
      <div>
        <ul>
          {this.props.users.length} Users!
          {arrayOfUsers.length > 0 ? arrayOfUsers : null }
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps = state => {
  return { users: state.users}
}



export default connect(mapStateToProps)(Users)

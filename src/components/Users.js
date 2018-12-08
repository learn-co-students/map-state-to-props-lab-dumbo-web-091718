import React, { Component } from 'react';
import {connect} from "react-redux"

class Users extends Component {
  render() {

    let allUsers = this.props.users.map((user, index) => <li key={index}>{user.username}</li> 
    )
    return (
      <div>
        {this.props.numberOfUsers}
        <ul>
          {allUsers}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {
    users: state.users,
    numberOfUsers: state.users.length
  }
}

export default connect(mapStateToProps)(Users)

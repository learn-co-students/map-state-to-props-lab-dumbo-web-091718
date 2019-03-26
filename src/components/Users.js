import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {


  render() {


    // if (users) {

      let users = this.props.users.map( (user, index) => {
        return (<li key={index}> {user.username} </li>)
      })
    // }

    return (
      <div>
        <ul>
          {this.props.userCount} Users! 
          {users ? users : <div> "None yet" </div>}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {
    users: state.users,
    userCount: state.users.length,
  }
}

export default connect(mapStateToProps)(Users)

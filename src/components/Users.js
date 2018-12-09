import React, { Component } from 'react';
import { connect } from 'react-redux'
class Users extends Component {

  showUsers  =()=> {
      this.props.users.map(user => {
        return (
        <li>
          <p>{user.username}</p>
          <p>{user.hometown}</p>
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <ul>
          {console.log(this.props.users)}
          {this.props.users.length > 0 ? this.props.users.map(user => {
            return (
            <li>
              <p>{user.username}</p>
              <p>{user.hometown}</p>
            </li>
          )
        }): "hello workd"}
        </ul>
        <p> User in system: {this.props.users.length}</p>
      </div>
    )
  }
}

const mapStateToProps =(state)=> {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(Users)

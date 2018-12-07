import React, { Component } from 'react';
import {connect} from 'react-redux'
class Users extends Component {

  render() {
    let users = this.props.users.map((u,index)=>{ return <li key={index}>{u.username}</li>})
    return (
      <div>
        <ul>
          {users}
        </ul>
        <p>Total: {users.length}</p>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state)=>{
  return {users: state.users}
}
export default connect(mapStateToProps)(Users)

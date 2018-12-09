import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    const users = this.props.users
    const nmbUsrs = this.props.numberOfUsers
    let mapdUsrs = users.map((u, i) => <li key={i}>{u.username}
    </li> 
    )
    return (
      <div>
        <ul>
         {mapdUsrs}
         {nmbUsrs}
        </ul>
      </div>
    )
  }
}

const mapStateToProps =(state)=>{ return {users: state.users,  numberOfUsers: state.users.length}}

export default connect(mapStateToProps)(Users)

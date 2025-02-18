import React, { Component } from 'react';
import { connect } from "react-redux";

class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>);

    return (
      <div>
        We have {this.props.numberOfUsers} users
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.users,
    numberOfUsers: state.users.length
  };
}


export default connect(mapStateToProps)(Users);

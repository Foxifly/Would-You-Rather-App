import React, { Component } from "react";
import { connect } from "react-redux";
import {removeAuthedUser} from "../actions/authUser"
import {Link} from 'react-router-dom'
class Profile extends Component {
  logout = (e) => {
    e.preventDefault()
    this.props.dispatch(removeAuthedUser())
  }
  render() {
    const { currentUser } = this.props;
    return (
      <div className="profile-container">
        <h1 className="profile-header">Profile</h1>
        <br />
        <div className="profile-card">
          <div className="avatar-container">
            <img alt={`${currentUser.name}'s avatar`} className="profile-avatar" src={currentUser.avatarURL} />
          </div>
          <div className="name-container">
            <p className="profile-name">
              <strong>{currentUser.name}</strong> ({currentUser.id})
            </p>
          </div>
          <div className="stats-container1">
            <p className="profile-stats">
              <strong>Questions Asked:</strong> {currentUser.questions.length}
            </p>
          </div>
          <div className="stats-container2">
            <p className="profile-stats">
              <strong>Questions Answered:</strong>{" "}
              {Object.keys(currentUser.answers).length}
            </p>
          </div>
          <div className="logout-container">
          <Link
            className="log-out"
            to={{
              pathname: `/`
            }}
          >
            Log Out

          </Link>
          </div>
        </div>
        <br />
        <h2 className="profile-header">My Questions</h2>
        <br />
      </div>
    );
  }
}
function mapStateToProps({ authedUser, users }) {
  const currentUser = users[authedUser];
  return {
    currentUser
  };
}
export default connect(mapStateToProps)(Profile);

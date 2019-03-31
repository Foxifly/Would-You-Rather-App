import React, { Component } from "react";
import { connect } from "react-redux";

class Profile extends Component {
  render() {
    const { currentUser } = this.props;
    return (
      <div className="profile-container">
      <div className="profile-card">
        <div className="avatar-container">
          <img className="profile-avatar" src={currentUser.avatarURL} />
        </div>
        <div className="name-container">
          <p className="profile-name"><strong>{currentUser.name}</strong> ({currentUser.id})</p>
          </div>
          <div className="stats-container1">
          <p className="profile-stats">Questions Asked: {currentUser.questions.length}</p>
          </div>
            <div className="stats-container2">
          <p className="profile-stats">Questions Answered: {Object.keys(currentUser.answers).length}</p>
        </div>
        <div className="logout-container">
        <button className="log-out">Log Out</button> </div>
      </div>
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

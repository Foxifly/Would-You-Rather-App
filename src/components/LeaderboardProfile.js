import React, { Component } from "react";
import "../style/leaderboard.css";

class LeaderboardProfile extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="leaderboard-container">
        <br />
        <div className="leaderboard-card">
          <div className="leaderboard-avatar-container">
            <img
              alt={`${user.name}'s avatar`}
              className="leaderboard-avatar"
              src={user.avatarURL}
            />
          </div>
          <div className="leaderboard-name-container">
            <p className="leaderboard-name">
              <strong>{user.name}</strong> ({user.id})
            </p>
          </div>
          <div className="leaderboard-stats-container1">
            <p className="leaderboard-stats">
              <strong>Questions Asked:</strong> {user.questions.length}
            </p>
          </div>
          <div className="leaderboard-stats-container2">
            <p className="leaderboard-stats">
              <strong>Questions Answered:</strong>{" "}
              {Object.keys(user.answers).length}
            </p>
          </div>
          <div className="leaderboard-score-container">
            <p className="leaderboard-score-header">Score</p>
            <p className="leaderboard-score">
              {Object.keys(user.answers).length + user.questions.length}
            </p>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default LeaderboardProfile;

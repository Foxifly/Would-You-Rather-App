import React, { Component } from "react";
import { connect } from "react-redux";
import Nav from "./Nav";
import LeaderboardProfile from "./LeaderboardProfile";
import ErrorPage from "./ErrorPage";

class Leaderboard extends Component {
  render() {
    const { leaderboard } = this.props;
    return (
      <div>
        {leaderboard && (
          <div>
            <Nav navItems={true} />
            <h1 className="header">Leaderboard</h1>
            {leaderboard.map(user => (
              <LeaderboardProfile key={user.id} user={user} />
            ))}
          </div>
        )}

        {!leaderboard && <ErrorPage />}
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  if (authedUser) {
    const userArray = Object.values(users);
    return {
      leaderboard: userArray.sort(
        (a, b) =>
          Object.keys(b.answers).length +
          b.questions.length -
          (Object.keys(a.answers).length + a.questions.length)
      )
    };
  } else {
    return {
      isauth: false
    };
  }
}
export default connect(mapStateToProps)(Leaderboard);

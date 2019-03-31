import React, { Component } from "react";
import { connect } from "react-redux";
import Nav from "./Nav";

class Leaderboard extends Component {
  render() {
    const {leaderboard} = this.props;
    return (
      <div>
        <Nav navItems={true} />
        {leaderboard.map((user) => <h1>{user.name} | {Object.keys(user.answers).length} | { user.questions.length}</h1>)}
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  const userArray = Object.values(users);
  return {
    leaderboard: userArray.sort((a, b) => (Object.keys(b.answers).length + b.questions.length) - (Object.keys(a.answers).length +  a.questions.length) )
  };
}
export default connect(mapStateToProps)(Leaderboard);

import React, { Component } from "react";
import Nav from "./Nav";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Nav navItems={["Home", "My Questions", "Leaderboard", "Log Out"]} />
        <p>DASH</p>
      </div>
    );
  }
}
export default Dashboard;

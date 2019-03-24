import React, { Component } from "react";
import Nav from "./Nav";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Nav navItems={true} />
        <p>DASH</p>
      </div>
    );
  }
}
export default Dashboard;

import React, { Component } from "react";
import handleInitialData from "../actions/shared";
import { connect } from "react-redux";
import LoginScreen from "./LoginScreen";
import "../style/app.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Dashboard from "./Dashboard"

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
      <Route path="/" exact component={LoginScreen} />
      <Route path="/dashboard" exact component={Dashboard} />

      </Router>
    );
  }
}

export default connect()(App);

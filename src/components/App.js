import React, { Component } from "react";
import handleInitialData from "../actions/shared";
import { connect } from "react-redux";
import LoginScreen from "./LoginScreen";
import "../style/app.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "./Nav"

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
      <Route path="/" exact component={LoginScreen} />
      <Route path="/welcome" exact component={Nav} />

      </Router>
    );
  }
}

export default connect()(App);

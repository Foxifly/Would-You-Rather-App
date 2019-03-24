import React, { Component } from "react";
import handleInitialData from "../actions/shared";
import { connect } from "react-redux";
import LoginScreen from "./LoginScreen";
import "../style/app.css";
import Nav from "./Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div className="App">
        <Nav/>
        <LoginScreen />
      </div>
    );
  }
}

export default connect()(App);

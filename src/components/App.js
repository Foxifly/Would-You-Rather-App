import React, { Component } from "react";
import handleInitialData from "../actions/shared";
import { connect } from "react-redux";
import LoginScreen from "./LoginScreen";
import "../style/app.css"

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div className="App">
        <LoginScreen />
      </div>
    );
  }
}

export default connect()(App);

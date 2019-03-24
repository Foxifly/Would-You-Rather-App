import React, { Component } from "react";
import handleInitialData from "../actions/shared";
import LoginScreen from "./LoginScreen";

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

export default App;

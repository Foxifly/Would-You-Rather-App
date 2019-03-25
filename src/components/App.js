import React, { Component, Fragment } from "react";
import handleInitialData from "../actions/shared";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import LoginScreen from "./LoginScreen";
import "../style/app.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Dashboard from "./Dashboard";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="container">
            {this.props.loading === true ? null : (
              <div>
                <Route path="/" exact component={LoginScreen} />
                <Route path="/dashboard" exact component={Dashboard} />
              </div>
            )}
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  };
}

export default connect(mapStateToProps)(App);

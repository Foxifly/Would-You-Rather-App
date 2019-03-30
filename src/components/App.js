import React, { Component, Fragment } from "react";
import handleInitialData from "../actions/shared";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import LoginScreen from "./LoginScreen";
import "../style/app.css";
import QuestionZoom from "./QuestionZoom"

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
                <Route path="/dashboard" exact component={Dashboard} page="U" />
                <Route path="/dashboard/unanswered" exact component={() => <Dashboard page="U"/>} />
                <Route path="/dashboard/answered" exact component={() => <Dashboard page="A"/>}/>
                <Route path="/dashboard/my-questions" exact component={() => <Dashboard page="M"/>} />
                <Route path="/dashboard/new" exact component={() => <Dashboard page="N"/>} />
                <Route path='/question/' component={QuestionZoom} />
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
    loading: authedUser === null,
  };
}

export default connect(mapStateToProps)(App);

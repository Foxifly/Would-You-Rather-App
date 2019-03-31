import React, { Component, Fragment } from "react";
import handleInitialData from "../actions/shared";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import LoginScreen from "./LoginScreen";
import "../style/app.css";
import QuestionZoom from "./QuestionZoom"
import PageNotFound from "./PageNotFound"
import Leaderboard from "./Leaderboard"
import "../style/profile.css"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
              <Switch>

                <Route path="/" exact component={LoginScreen} />
                <Route path="/unanswered" exact component={() => <Dashboard page="U"/>} />
                <Route path="/answered" exact component={() => <Dashboard page="A"/>}/>
                <Route path="/profile" exact component={() => <Dashboard page="M"/>} />
                <Route path="/new" exact component={() => <Dashboard page="N"/>} />
                <Route path="/leaderboard" exact component={() => <Leaderboard/>} />
                <Route path='/question/' component={QuestionZoom} />
                <Route component={PageNotFound} />

              </Switch>  </div>

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

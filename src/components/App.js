import React, { Component, Fragment } from "react";
import handleInitialData from "../actions/shared";
import { connect } from "react-redux";
import "../style/app.css";
import "../style/profile.css";
import Dashboard from "./Dashboard";
import QuestionZoom from "./QuestionZoom";
import PageNotFound from "./PageNotFound";
import Leaderboard from "./Leaderboard";
import LoadingBar from "react-redux-loading";
import LoginScreen from "./LoginScreen";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { fakeAuth } from "../utils/api";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      fakeAuth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

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
                  <PrivateRoute
                    path="/unanswered"
                    exact
                    component={() => <Dashboard page="U" />}
                  />
                  <PrivateRoute
                    path="/answered"
                    exact
                    component={() => <Dashboard page="A" />}
                  />
                  <PrivateRoute
                    path="/profile"
                    exact
                    component={() => <Dashboard page="M" />}
                  />
                  <PrivateRoute
                    path="/add"
                    exact
                    component={() => <Dashboard page="N" />}
                  />
                  <PrivateRoute
                    path="/leaderboard"
                    exact
                    component={() => <Leaderboard />}
                  />
                  <PrivateRoute path="/question/" component={QuestionZoom} />
                  <Route path="/404" component={PageNotFound} />
                  <Route component={PageNotFound} />
                </Switch>{" "}
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

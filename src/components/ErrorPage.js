import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class ErrorPage extends Component {
  render() {
    return (
      <div className="error-page">
        <h1 className="header-404">Error</h1>
        <div className="container-404">
          <p className="sorry-not-sorry">
            Sorry for the trouble, but you must log in to access this page!
          </p>
          <img
            className="cow-error-img"
            alt="sad cow"
            src="https://farm6.staticflickr.com/5125/5242994366_63f85e7547_b.jpg"
          />
          <br />

          <Link
            className="log-in"
            to={{
              pathname: `/`
            }}
          >
            Log In
          </Link>
        </div>
      </div>
    );
  }
}
export default withRouter(ErrorPage);

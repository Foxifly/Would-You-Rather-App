import React, { Component } from "react";
import "../style/pagenotfound.css";
import { Link, withRouter } from "react-router-dom";

class PageNotFound extends Component {
  render() {
    return (
      <div className="error-page">
        <h1 className="header-404">404</h1>
        <div className="container-404">
          <p className="sorry-not-sorry">
            We're sorry, but this page doesn't exist.
          </p>
          <img
            className="bear-404-img"
            alt="sad bear"
            src="https://static.boredpanda.com/blog/wp-content/uploads/2017/10/59e4511ac3e59_25493510874_53ad2940dc_k__605.jpg"
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
export default withRouter(PageNotFound);

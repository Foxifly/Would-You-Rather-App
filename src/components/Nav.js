import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../style/nav.css";
import { connect } from "react-redux";
import { removeAuthedUser } from "../actions/authUser";

class Nav extends Component {
  state = {
    isLogin: null
  };

  componentDidMount() {
    const { navItems } = this.props;
    if (navItems) {
      //render regular navbar
      this.setState({ isLogin: false });
    } else {
      //render login NAVBAR
      this.setState({ isLogin: true });
    }
  }
  logout = e => {
    e.preventDefault();
    this.props.dispatch(removeAuthedUser());
  };

  render() {
    const { currUser } = this.props;
    const { isLogin } = this.state;
    return (
      <div>
        {isLogin && (
          <nav className="navigation">
            <div className="logo">Wyr</div>
          </nav>
        )}

        {currUser && !isLogin && (
          <nav className="navigation">
            <div className="logo">Wyr</div>
            <div className="nav-item-container">
              <NavLink
                className="nav-item"
                to="/unanswered"
                exact
                activeClassName="active"
              >
                Unanswered Questions
              </NavLink>

              <NavLink
                className="nav-item"
                to="/answered"
                exact
                activeClassName="active"
              >
                Answered Questions
              </NavLink>

              <NavLink
                className="nav-item"
                to="/leaderboard"
                exact
                activeClassName="active"
              >
                Leaderboard
              </NavLink>

              <NavLink
                className="nav-item"
                to="/add"
                exact
                activeClassName="active"
              >
                New Question
              </NavLink>

              <NavLink
                className="nav-item"
                to="/"
                exact
                activeClassName="active"
              >
                Logout
              </NavLink>
            </div>
            <div className="avatar-container-nav">
              <p className="user-greeting">Hello, {currUser.name}! </p>
              <NavLink
                className="avatar-container"
                to="/profile"
                exact
                activeClassName="ignore-active"
              >
                <img
                  alt={`${currUser.name}'s avatar'`}
                  className="avatar"
                  src={currUser.avatarURL}
                />
              </NavLink>
            </div>
          </nav>
        )}
      </div>
    );
  }
}
function mapStateToProps({ authedUser, users }) {
  if (authedUser) {
    const currUser = users[authedUser];
    return {
      currUser
    };
  } else {
    return {
      isError: true
    };
  }
}
export default connect(mapStateToProps)(Nav);

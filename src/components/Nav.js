import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../style/nav.css"

class Nav extends Component {
  state = {
    isLogin: null
  };

  componentDidMount() {
    const { navItems } = this.props;
    console.log(navItems);
    if (navItems) {
      //render regular navbar
      this.setState({ isLogin: false });
    } else {
      //render login NAVBAR
      this.setState({ isLogin: true });
    }
  }

  render() {
    const { isLogin } = this.state;
    return (
      <div>

        {isLogin && (
          <nav className="navigation">
            <div className="logo">Wyr</div>
          </nav>
        )}

        {!isLogin && (
          <nav className="navigation">
            <div className="logo">Wyr</div>
            <div className="nav-item-container">
            <NavLink className="nav-item" to="/dashboard/unanswered" exact activeClassName="active">
              Unanswered Questions
            </NavLink>

            <NavLink className="nav-item" to="/dashboard/answered" exact activeClassName="active">
              Answered Questions
            </NavLink>
            
            <NavLink className="nav-item" to="/dashboard/my-questions" exact activeClassName="active">
              My Questions
            </NavLink>

            <NavLink className="nav-item" to="/dashboard/new" exact activeClassName="active">
              New Question
            </NavLink>

            <NavLink className="nav-item" to="/" exact activeClassName="active">
              Logout
            </NavLink>
            </div>

          </nav>
        )}
      </div>
    );
  }
}
export default Nav;

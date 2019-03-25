import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { handleSwitchUser } from "../actions/authUser";
import "../style/loginpage.css";

import Nav from "./Nav";

class LoginScreen extends Component {
  state = {
    id: "",
    isBlank: null
  };

  handleSubmit = e => {
    const { id } = this.state;
    const { dispatch } = this.props;
    e.preventDefault();
    if (id) {
      dispatch(handleSwitchUser(id));
      this.setState(() => ({
        isBlank: true,
        toHome: id ? true : false
      }));
    } else {
      this.setState(() => ({
        isBlank: false
      }));
    }
  };

  handleChange = e => {
    const id = e.target.value;
    if (id) {
      this.setState(() => ({
        id
      }));
    } else {
      this.setState(() => ({
        id
      }));
    }
  };

  render() {
    if (this.state.toHome) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div className="login-container">
        <Nav navItems={false} />
        <div className="login-box">
          <div className="login-header">
            <h1>Welcome, let's play!</h1>
          </div>

          <h2>Log in to get started.</h2>

          <form onSubmit={this.handleSubmit} className="login-form">
            <div className="select-container">
              <select className="login-id" onChange={this.handleChange}>
                <option />
                <option value="sarahedo">Sarah Edo</option>
                <option value="tylermcginnis">Tyler McGinnis</option>
                <option value="johndoe">John Doe</option>
              </select>
              <br />
              <button className="login-button" type="submit">
                {" "}
                Login{" "}
              </button>
            </div>
          </form>

          {this.state.isBlank === false ? (
            <p className="invalid-user"> Please select a valid user </p>
          ) : null}
        </div>
      </div>
    );
  }
}

/*
Right now, it is hardcoded into the app to take the authed id from a hardcoded value.
On this login screen, it needs to update the authed id to the new authed id.
*/

export default connect()(LoginScreen);

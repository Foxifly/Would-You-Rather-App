import React, { Component } from "react";
import { connect } from "react-redux";
import { handleSwitchUser } from "../actions/authUser";

class LoginScreen extends Component {
  state = {
    id: "",
    isBlank: null
  };

  handleSubmit = e => {
    console.log("The login id auth: ", this.state.id);
    e.preventDefault();
    if (this.state.id) {
      this.props.dispatch(handleSwitchUser(this.state.id));
      this.setState(() => ({
        isBlank: true
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
    return (
      <div>
        <h1>Welcome to the would you rather app!</h1>
        <h2>Please sign in to continue</h2>

        <form onSubmit={this.handleSubmit} className="login-form">
          <select onChange={this.handleChange}>
            <option />
            <option value="sarahedo">Sarah Edo</option>
            <option value="tylermcginnis">Tyler McGinnis</option>
            <option value="johndoe">John Doe</option>
          </select>
          <button type="submit"> Submit </button>
        </form>

        {this.state.isBlank === false ? (
          <p> Please select a valid user </p>
        ) : null}
      </div>
    );
  }
}

/*
Right now, it is hardcoded into the app to take the authed id from a hardcoded value.
On this login screen, it needs to update the authed id to the new authed id.
*/

export default connect()(LoginScreen);

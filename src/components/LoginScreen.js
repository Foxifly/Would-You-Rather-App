import React, { Component } from "react";

class LoginScreen extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to the would you rather app!</h1>
        <h2>Please sign in to continue</h2>

        <form className="login-form">
          <select>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </form>
      </div>
    );
  }
}

export default LoginScreen;

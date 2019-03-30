import React, { Component } from "react";
import { connect } from "react-redux";
import Nav from "./Nav"

class Question extends Component {
  state = {
    option: ""
  };

  handleClick = e => {
    const value = e.target.value;
    console.log(value);
    this.setState({
      option: value
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    //Todo: update the store with the users's choice
  };
  render() {
    const { currQuestion } = this.props.location.state;
    const { option } = this.state;

    return (
      <div>
      <Nav navItems={true} />
        {currQuestion && (
          <div>
            <h2>Would You Rather...</h2>

            <form onSubmit={this.handleSubmit}>
              <div className="radio">
                <label>
                  <input
                    onChange={this.handleClick}
                    type="radio"
                    value="optionOne"
                    checked={option === "optionOne"}
                  />
                  {currQuestion.optionOne.text}
                </label>
              </div>

              <div className="radio">
                <label>
                  <input
                    onChange={this.handleClick}
                    type="radio"
                    value="optionTwo"
                    checked={option === "optionTwo"}
                  />
                  {currQuestion.optionTwo.text}
                </label>
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default connect()(Question);

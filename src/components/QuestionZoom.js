import React, { Component } from "react";
import { connect } from "react-redux";
import Nav from "./Nav"
import "../style/question.css"
import {handleAddAnswer} from "../actions/shared"

class Question extends Component {
  state = {
    option: ""
  };

  handleClick = e => {
    const value = e.target.value;
    this.setState({
      option: value
    });
  };
  handleSubmit = e => {
    const { currQuestion } = this.props.location.state;
    const {currentUser} = this.props;
    const { option } = this.state;
    e.preventDefault();
    this.props.dispatch(handleAddAnswer(currentUser, currQuestion.id, option ))
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

function mapStateToProps({authedUser, users}) {
  const currentUser = users[authedUser]
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(Question);

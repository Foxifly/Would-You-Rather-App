import React, { Component } from "react";
import { connect } from "react-redux";
import Nav from "./Nav";
import "../style/question.css";
import { handleAddAnswer } from "../actions/shared";
import {Redirect} from 'react-router-dom'

class Question extends Component {
  state = {
    option: "",
    successful: ""
  };

  handleClick = e => {
    const value = e.target.value;
    this.setState({
      option: value
    });
  };
  handleSubmit = e => {
    const { currentUser, question } = this.props;
    const { option, successful } = this.state;
    e.preventDefault();
    if ((currentUser, question, option)) {
      this.setState({ successful: true });
      this.props.dispatch(handleAddAnswer(currentUser, question.id, option));
    } else {
      this.setState({ successful: false });
    }
  };
  render() {
    const {
      isAnswered,
      question,
      optionTwoPercent,
      optionOnePercent, isQuestion
    } = this.props;
    const { option } = this.state;

    return (
      <div>
        <Nav navItems={true} />
        {isQuestion === false &&
          <Redirect to="/404" />
        }
        {isAnswered && question && (
          <div className="results-container">
            <div className="WYR-header-container">
              <h2 className="WYR-header">Would You Rather...</h2>
            </div>

            <div className="answer-holder">
              <p className="option">{question.optionOne.text}</p>
              <div className="percent-outline">
                <div
                  style={{
                    width: `${optionOnePercent}%`,
                    height: "100%",
                    backgroundColor: "#477282",
                    borderRadius: "5px"
                  }}
                  className="percent-container"
                >
                  <p className="percent">{optionOnePercent}%</p>
                </div>
              </div>

              <p className="option">{question.optionTwo.text}</p>
              <div className="percent-outline">
                <div
                  className="percent-container"
                  style={{
                    width: `${optionTwoPercent}%`,
                    height: "100%",
                    backgroundColor: "#477282",
                    borderRadius: "5px "
                  }}
                >
                  <p className="percent">{optionTwoPercent}%</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {!isAnswered && question && (
          <div className="results-container">
            <div className="WYR-header-container">
              <h2 className="WYR-header">Would You Rather...</h2>
            </div>

            <form className="answer-question" onSubmit={this.handleSubmit}>
              <div className="radio">
                <label className="radio-label">
                  <input
                    onChange={this.handleClick}
                    type="radio"
                    value="optionOne"
                    checked={option === "optionOne"}
                  />
                  {question.optionOne.text}
                </label>
              </div>

              <div className="radio">
                <label className="radio-label">
                  <input
                    onChange={this.handleClick}
                    type="radio"
                    value="optionTwo"
                    checked={option === "optionTwo"}
                  />
                  {question.optionTwo.text}
                </label>
              </div>

              <button className="submit-answer" type="submit">
                Submit
              </button>
            </form>
            {this.state.successful === false && (
              <p className="error-text">
                Please answer the question to continue!
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, { location }) {

  if (location.state) {
    const currQuestion = location.state.currQuestion;
    const thisQuestion = questions[currQuestion.id];
  const currentUser = users[authedUser];
  const currentUserAnswers = currentUser
    ? Object.keys(currentUser.answers)
    : [];

  const optionOnePercent = Math.round(
    (thisQuestion.optionOne.votes.length /
      (thisQuestion.optionOne.votes.length +
        thisQuestion.optionTwo.votes.length)) *
      100
  );
  const optionTwoPercent = Math.round(
    (thisQuestion.optionTwo.votes.length /
      (thisQuestion.optionOne.votes.length +
        thisQuestion.optionTwo.votes.length)) *
      100
  );
  return {
    currentUser,
    question: thisQuestion,
    isAnswered: currentUserAnswers.includes(thisQuestion.id) ? true : false,
    optionOnePercent,
    optionTwoPercent,
     isQuestion: true,
  };
} else {
  return {
    isQuestion: false
  }
}
}

export default connect(mapStateToProps)(Question);

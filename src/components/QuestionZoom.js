import React, { Component } from "react";
import { connect } from "react-redux";
import Nav from "./Nav";
import "../style/question.css";
import { handleAddAnswer } from "../actions/shared";
import { Redirect } from "react-router-dom";

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
    const { option } = this.state;
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
      optionOnePercent,
      optionOneVotes,
      optionTwoVotes,
      isQuestion,
      creator,
      answer
    } = this.props;
    const { option, successful } = this.state;

    return (
      <div>
        <Nav navItems={true} />
        {isQuestion === false && <Redirect to="/404" />}
        {isAnswered && question && (
          <div className="results-container">
            <div className="WYR-header-container">
              <h2 className="WYR-header">Would You Rather...</h2>
            </div>

            <div className="answer-holder">
              <p className="option">{question.optionOne.text}</p>
              <p className="votes">
                Votes: {optionOneVotes} of {optionTwoVotes + optionOneVotes}{" "}
              </p>
              {answer === "optionOne" && (
                <p className="your-answer">Your Answer</p>
              )}
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

              <hr className="option-break" />

              <p className="option">{question.optionTwo.text}</p>
              <p className="votes">
                Votes: {optionTwoVotes} of {optionTwoVotes + optionOneVotes}
              </p>
              {answer === "optionTwo" && (
                <p className="your-answer">Your Answer</p>
              )}
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
            <div className="created-by">
              <img
                alt={`${creator.name}'s avatar`}
                className="avatar"
                src={creator.avatarURL}
              />
              <p className="created-by-name">created by {creator.name}</p>
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
            {successful === false && (
              <p className="error-text">
                Please answer the question to continue!
              </p>
            )}
            <div className="created-by">
              <img
                alt={`${creator.name}'s avatar`}
                className="avatar"
                src={creator.avatarURL}
              />
              <p className="created-by-name">created by {creator.name}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, { location }) {
  if (location.state && authedUser) {
    const currQuestion = location.state.currQuestion;
    const thisQuestion = questions[currQuestion.id];
    const questionCreator = currQuestion.author;
    const creatorInfo = users[questionCreator];
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
      optionOneVotes: thisQuestion.optionOne.votes.length,
      optionTwoVotes: thisQuestion.optionTwo.votes.length,
      isQuestion: true,
      creator: creatorInfo,
      answer: currentUserAnswers.includes(thisQuestion.id)
        ? currentUser.answers[thisQuestion.id]
        : null
    };
  } else {
    return {
      isQuestion: false
    };
  }
}

export default connect(mapStateToProps)(Question);

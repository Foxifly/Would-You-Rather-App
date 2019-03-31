import React, { Component } from "react";
import { connect } from "react-redux";
import Nav from "./Nav";
import "../style/question.css";
import { handleAddAnswer } from "../actions/shared";

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
    const { currQuestion } = this.props.location.state;
    const { currentUser } = this.props;
    const { option, successful } = this.state;
    e.preventDefault();
    if ((currentUser, currQuestion, option)) {
      this.setState({ successful: true });
      this.props.dispatch(
        handleAddAnswer(currentUser, currQuestion.id, option)
      );
    } else {
      this.setState({ successful: false });
    }
  };
  render() {
    const { currQuestion } = this.props.location.state;
    const {isAnswered, optionTwoPercent, optionOnePercent} = this.props;
    const { option } = this.state;



    return (
      <div>
        <Nav navItems={true} />

        {isAnswered && currQuestion && (
          <div className="results-container">
            <div className="WYR-header-container">
              <h2 className="WYR-header">Would You Rather...</h2>
            </div>

            <div className="answer-holder">
              <p className="option">{currQuestion.optionOne.text}</p>
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

              <p className="option">{currQuestion.optionTwo.text}</p>
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

        {!isAnswered && currQuestion && (
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
                  {currQuestion.optionOne.text}
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
                  {currQuestion.optionTwo.text}
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

function mapStateToProps({ authedUser, users }, {location}) {
  const currQuestion = location.state.currQuestion;
  console.log("currQuestion", currQuestion)

  const currentUser = users[authedUser];
  const currentUserAnswers = currentUser
    ? Object.keys(currentUser.answers)
    : [];

    const optionOnePercent = Math.round(
      (currQuestion.optionOne.votes.length /
        (currQuestion.optionOne.votes.length +
          currQuestion.optionTwo.votes.length)) *
        100
    );
    const optionTwoPercent = Math.round(
      (currQuestion.optionTwo.votes.length /
        (currQuestion.optionOne.votes.length +
          currQuestion.optionTwo.votes.length)) *
        100
    );
  return {
    currentUser,
    isAnswered:  currentUserAnswers.includes(currQuestion.id) ? true : false,
    optionOnePercent,
    optionTwoPercent
  };
}



export default connect(mapStateToProps)(Question);

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import "../style/questionlist.css";
import { formatDate } from "../utils/helper";

class Question extends Component {
  render() {
    const {
      question,
      category,
      optionTwoVoteCount,
      optionOneVoteCount,
      voteCount
    } = this.props;

    return (
      <div className="question-container">
        <div className="question-header">
          <h2 className="category">{question.category}</h2>
        </div>
        <h3 className="author">By {question.author}</h3>

        <h3 className="votes">Votes {voteCount}</h3>
        <h3 />
        {category === "M" && (
          <div className="zoom-button-container">
            <Link
              className="question-zoom-button"
              to={{
                pathname: `/question/${question.id}`,
                state: {
                  currQuestion: question
                }
              }}
            >
              View Poll
            </Link>
          </div>
        )}
        {category === "U" && (
          <div className="zoom-button-container">
            <Link
              className="question-zoom-button"
              to={{
                pathname: `/question/${question.id}`,
                state: {
                  currQuestion: question
                }
              }}
            >
              View Poll
            </Link>
          </div>
        )}
        {category === "A" && (
          <div className="zoom-button-container">
            <Link
              className="question-zoom-button"
              to={{
                pathname: `/question/${question.id}`,
                state: {
                  currQuestion: question
                }
              }}
            >
              View Poll
            </Link>
          </div>
        )}
        <h3 className="date">{formatDate(question.timestamp)}</h3>
      </div>
    );
  }
}

function mapStateToProps({ questions }, { question }) {
  console.log(question);
  const optionOneVoteCount = question.optionOne.votes.length;
  const optionTwoVoteCount = question.optionTwo.votes.length;
  return {
    questions,
    question,
    optionOneVoteCount,
    optionTwoVoteCount,
    voteCount: optionOneVoteCount + optionTwoVoteCount
  };
}

export default withRouter(connect(mapStateToProps)(Question));

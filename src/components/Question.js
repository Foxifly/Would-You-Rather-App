import React, { Component } from "react";
import { handleAddQuestion } from "../actions/questions";
import { connect } from "react-redux";
import QuestionZoom from "./QuestionZoom";
import { Link, withRouter } from "react-router-dom";

class Question extends Component {
  state = {
    option: ""
  };

  render() {
    const { question, category } = this.props;
    const { option } = this.state;

    return (
      <div className="question-container">
        <h1>{question.category}</h1>
        {category === "M" && (
          <Link
            to={{
              pathname: `/question/${question.id}`,
              state: {
                currQuestion: question
              }
            }}
          >
            View Poll
          </Link>
        )}
        {category === "U" && (
          <Link
            to={{
              pathname: `/question/${question.id}`,
              state: {
                currQuestion: question
              }
            }}
          >
            View Poll
          </Link>
        )}
        {category === "A" && (
          <Link
            to={{
              pathname: `/question/${question.id}`,
              state: {
                currQuestion: question
              }
            }}
          >
            View Poll
          </Link>
        )}
      </div>
    );
  }
}

export default withRouter(connect()(Question));

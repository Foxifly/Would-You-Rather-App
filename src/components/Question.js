import React, { Component } from "react";
import { handleAddQuestion } from "../actions/questions";
import { connect } from "react-redux";
import QuestionZoom from "./QuestionZoom";
import { Link, withRouter } from "react-router-dom";
import "../style/questionlist.css";

class Question extends Component {
  state = {
    option: ""
  };

  render() {
    const { question, category } = this.props;
    const { option } = this.state;

    return (
      <div className="question-container">
        <h2 className="category">{question.category}</h2>
        {category === "M" && (
          <Link className="question-zoom-button"
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
          <Link className="question-zoom-button"
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
          <Link className="question-zoom-button"
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

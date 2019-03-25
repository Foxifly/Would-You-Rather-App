import React, { Component } from "react";
import { connect } from "react-redux";
import UserQuestions from "./UserQuestions";
import Answered from "./Answered";
import Unanswered from "./Unanswered";

class QuestionSorter extends Component {
  state = {
    view: "M" //M = My questions / A = Answered / U = Unanswered - default M
  };
  render() {
    const {
      question,
      currentUser,
      currentUserQuestions,
      currentUserAnswers
    } = this.props;

    const { view } = this.state;

    return (
      <div className="question">
        <div className="question-container">
          {/*he questions that the user created*/}

          {view === "M" && (
            <div className="my-questions">
              {currentUserQuestions.map(
                userQ =>
                  userQ === question.id && <UserQuestions question={question} />
              )}
            </div>
          )}

          {/*the questions that the user answered*/}

          {view === "A" && (
            <div className="my-answered-questions">
              {Object.keys(this.props.currentUserAnswers).map(
                userA =>
                  userA !== question.id && <Unanswered question={question} />
              )}
            </div>
          )}

          {view === "U" && (
            <div className="my-answered-questions">
              {Object.keys(this.props.currentUserAnswers).map(
                userA =>
                  userA === question.id && <Answered question={question} />
              )}
            </div>
          )}

          {/*unanswered questions*/}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];
  const currentUser = users[authedUser];
  const currentUserQuestions = currentUser.questions;
  const currentUserAnswers = currentUser.answers;

  return {
    authedUser,
    question,
    currentUser,
    currentUserQuestions,
    currentUserAnswers
  };
}

export default connect(mapStateToProps)(QuestionSorter);

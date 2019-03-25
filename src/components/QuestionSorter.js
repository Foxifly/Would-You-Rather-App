import React, { Component } from "react";
import { connect } from "react-redux";
import UserQuestions from "./UserQuestions";
import Answered from "./Answered";
import Unanswered from "./Unanswered";

class QuestionSorter extends Component {
  render() {
    const {
      question,
      currentUser,
      currentUserQuestions,
      currentUserAnswers
    } = this.props;

    return (
      <div className="question">
        <div className="question-container">
          {/*he questions that the user created*/}
          <div className="my-questions">
          
          <h3>My Questions</h3>
          {currentUserQuestions.map(
            userQ =>
              userQ === question.id && <UserQuestions question={question} />
          )}
          </div>

          {/*the questions that the user answered*/}
          <div className="my-answered-questions">
          <h3>My Answered Questions</h3>
          {Object.keys(this.props.currentUserAnswers).map(
            userA => userA !== question.id && <Unanswered question={question} />
          )}
            </div>

          {/*unanswered questions*/}
          <div className="my-answered-questions">
          <h3>My Unnswered Questions</h3>
          {Object.keys(this.props.currentUserAnswers).map(
            userA => userA === question.id && <Answered question={question} />
          )}  </div>
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

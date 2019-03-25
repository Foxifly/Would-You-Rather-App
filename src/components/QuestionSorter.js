import React, { Component } from "react";
import { connect } from "react-redux";
import  UserQuestions from "./UserQuestions"

class QuestionSorter extends Component {
  render() {
    const { question, currentUser, currentUserQuestions, currentUserAnswers } = this.props;

    return (
      <div className="question">
        <div className="question-container">

      {/*he questions that the user created*/}
        {currentUserQuestions.map((userQ) => userQ === question.id && <UserQuestions question={question}/>)}

        {/*the questions that the user answered*/}

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
  console.log(currentUserAnswers)
//{currentUserAnswers.map((userA) => userA === question.id && console.log(userA))}
  return {
    authedUser,
    question,
    currentUser,
    currentUserQuestions,
    currentUserAnswers
  };
}

export default connect(mapStateToProps)(QuestionSorter);

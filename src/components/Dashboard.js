import React, { Component } from "react";
import Nav from "./Nav";
import { connect } from "react-redux";
import Question from "./Question";
import NewQuestion from "./NewQuestion";

class Dashboard extends Component {
  state = {
    view: "" //M = My questions / A = Answered / U = Unanswered - default M
  };
  componentDidMount() {
    this.props.page
      ? this.setState({
          view: this.props.page
        })
      : this.setState({
          view: "U"
        });
    console.log("page props: ", this.props.page);
  }
  render() {
    const { unanswered, answered, myQuestions, currentUser } = this.props;
    const { view } = this.state;

    return (
      <div>
        <Nav navItems={true} />
        <p>Welcome {currentUser.name}</p>


        {view === "M" && (
          <div className="my-questions">
            {myQuestions.map(question => (
              <Question key={question.id} question={question} category="M" />
            ))}
          </div>
        )}

        {view === "U" && (
          <div className="my-questions">
            {unanswered.map(question => (
              <Question key={question.id} question={question} category="U" />
            ))}
          </div>
        )}

        {view === "A" && (
          <div className="my-questions">
            {answered.map(question => (
              <Question key={question.id} question={question} category="A" />
            ))}
          </div>
        )}

        {view === "N" && <NewQuestion />}
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, { page }) {
  const questionArray = Object.values(questions).sort(
    (a, b) => b.timestamp - a.timestamp
  );
  const currentUser = users[authedUser];
  const currentUserQuestions = currentUser ? currentUser.questions : [];
  const currentUserAnswers = currentUser
    ? Object.keys(currentUser.answers)
    : [];

  return {
    allQuestions: questions,
    currentUser,
    currentUserQuestions,
    page,
    myQuestions: questionArray.filter(question =>
      question.author === currentUser.id ? question : null
    ),
    answered: questionArray.filter(question =>
      currentUserAnswers.includes(question.id) ? question : null
    ),
    unanswered: questionArray.filter(question =>
      currentUserAnswers.includes(question.id) ? null : question
    )
  };
}

export default connect(mapStateToProps)(Dashboard);

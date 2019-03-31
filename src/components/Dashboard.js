import React, { Component } from "react";
import Nav from "./Nav";
import { connect } from "react-redux";
import Question from "./Question";
import NewQuestion from "./NewQuestion";
import Profile from "./Profile";
import { Link, withRouter } from "react-router-dom";

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
  }
  render() {
    const { unanswered, answered, myQuestions, currentUser } = this.props;
    const { view } = this.state;

    return (
      <div>
        <Nav navItems={true} />

        {!currentUser && (
          <div className="error-page">
            <h1 className="header-404">Error</h1>
            <div className="container-404">
              <p className="sorry-not-sorry">
                Sorry for the trouble, but you must log in to access this page!
              </p>
              <img
                className="cow-error-img"
                alt="sad cow"
                src="https://farm6.staticflickr.com/5125/5242994366_63f85e7547_b.jpg"
              />
              <br />

              <Link
                className="log-in"
                to={{
                  pathname: `/`
                }}
              >
                Log In
              </Link>
            </div>
          </div>
        )}

        {currentUser && view === "M" && (
          <div className="my-questions">
            <Profile />

            {myQuestions.map(question => (
              <Question key={question.id} question={question} category="M" />
            ))}
          </div>
        )}

        {currentUser && view === "U" && (
          <div>
            <h1 className="header">Unanswered Questions</h1>

            <div className="my-questions">
              {unanswered.map(question => (
                <Question key={question.id} question={question} category="U" />
              ))}
            </div>
          </div>
        )}

        {currentUser && view === "A" && (
          <div>
            <h1 className="header">Answered Questions</h1>
            <div className="my-questions">
              {answered.map(question => (
                <Question key={question.id} question={question} category="A" />
              ))}
            </div>
          </div>
        )}

        {currentUser && view === "N" && <NewQuestion />}
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, { page }) {
  if (authedUser) {
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
}

export default withRouter(connect(mapStateToProps)(Dashboard));

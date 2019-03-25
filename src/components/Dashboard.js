import React, { Component } from "react";
import Nav from "./Nav";
import Question from "./Question"
import {connect} from "react-redux"
class Dashboard extends Component {
  render() {

    const {authedUser, questions} = this.props;
    return (
      <div>
        <Nav navItems={true} />
        <p>Welcome {this.props.authedUser}</p>
        <Question/>
        <ul>
        {questions && questions.map((question) =>  <li key={question.id}>{question.optionOne}</li>   )}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  return {
    authedUser,
    questions,
  };
}
export default connect(mapStateToProps)(Dashboard);

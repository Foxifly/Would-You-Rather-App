import React, { Component } from "react";
import Nav from "./Nav";
import QuestionSorter from "./QuestionSorter"
import {connect} from "react-redux"
class Dashboard extends Component {
  render() {

    const {users, questions} = this.props;

    return (
      <div>
        <Nav navItems={true} />
        <p>Welcome {this.props.authedUser}</p>

        {questions.map((question) => <QuestionSorter id={question} user={users}/>  )
      }

      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  console.log(users)
  return {
    questions: Object.keys(questions),
    authedUser
  };
}
export default connect(mapStateToProps)(Dashboard);

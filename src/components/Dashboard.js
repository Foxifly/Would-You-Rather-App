import React, { Component } from "react";
import Nav from "./Nav";
import QuestionSorter from "./QuestionSorter"
import {connect} from "react-redux"
class Dashboard extends Component {
  render() {

    const {users, questions, page} = this.props;
    console.log("page props: ", this.props.page)

    return (
      <div>
        <Nav navItems={true} />
        <p>Welcome {this.props.authedUser}</p>

        {questions.map((question) => <QuestionSorter page={page} key={question} id={question} user={users}/>  )
      }

      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, {page}) {
  console.log(users)
  return {
    questions: Object.keys(questions),
    authedUser,
    page
  };
}
export default connect(mapStateToProps)(Dashboard);

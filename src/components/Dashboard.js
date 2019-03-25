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
        <h2>Would you rather...</h2>
        <ul>
        {questions && questions.map((question) => { console.log(question); return question &&  <li key={question}><Question id={question}/></li>}   )
      }
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  console.log(authedUser)
  return {
    questions: Object.keys(questions),
    authedUser
  };
}
export default connect(mapStateToProps)(Dashboard);

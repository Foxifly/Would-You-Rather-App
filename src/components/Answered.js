// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { formatDate } from "../utils/helper";
//
// class Answered extends Component {
//   render() {
//     const { question } = this.props;
//     const { id, author, timestamp, optionOne, optionTwo } = question;
//     return (
//       <div className="question">
//         <div className="question-container">
//           <p className="option-one">{optionOne.text}</p>
//           <p className="option-two">{optionTwo.text}</p>
//         </div>
//       </div>
//     );
//   }
// }
//
// function mapStateToProps({ authedUser, users, questions }, { id }) {
//   const question = questions[id];
//
//   return {
//     authedUser,
//     question
//   };
// }
//
// export default connect(mapStateToProps)(Answered);

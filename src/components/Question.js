import React, { Component } from "react";

class Question extends Component {

  render() {
    const {question, category} = this.props;

    return (
      <div>
        <h1>Would you rather...</h1>
        <h2>{question.optionOne.text}</h2>
        <h2>{question.optionTwo.text}</h2>
      </div>
    );
  }
}

export default Question;

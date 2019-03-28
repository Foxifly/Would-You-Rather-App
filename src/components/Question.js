import React, { Component } from "react";
import {handleAddQuestion} from "../actions/questions"
import {connect} from 'react-redux'

class Question extends Component {
  state = {
    option: ""
  };
   testDrive = () => {

      this.props.dispatch(handleAddQuestion("hello", "hello", "hey"))
    }


  render() {
    const { question, category } = this.props;
    const { option } = this.state;

    return (
      <div className="question-container">

        <h1>{question.category}</h1>
        {category === "M" && <button onClick={this.testDrive}> Edit My Question </button> }
        {category === "U" && <button> Answer This Question </button> }
        {category === "A" && <button> View Results </button> }


      </div>
    );
  }
}

export default connect()(Question);

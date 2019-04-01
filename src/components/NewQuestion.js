import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/shared";
import { Redirect } from "react-router-dom";
import "../style/newquestion.css";

class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
    category: ""
  };
  handleOptionOneChange = e => {
    const optionOne = e.target.value;

    this.setState(() => ({
      optionOne
    }));
  };
  handleOptionTwoChange = e => {
    const optionTwo = e.target.value;

    this.setState(() => ({
      optionTwo
    }));
  };
  handleCategoryChange = e => {
    const category = e.target.value;

    this.setState(() => ({
      category
    }));
  };
  handleSubmit = e => {
    e.preventDefault();

    const { optionOne, optionTwo, category } = this.state;
    const { dispatch } = this.props;
    if (optionOne && optionTwo && category) {
      dispatch(handleAddQuestion(optionOne, optionTwo, category));
      this.setState(() => ({
        optionOne: "",
        optionTwo: "",
        category: "",
        toHome: true
      }));
    } else {
      this.setState(() => ({
        toHome: false
      }));
    }
  };
  render() {
    const { optionOne, optionTwo, category, toHome } = this.state;

    if (toHome) {
      return <Redirect to="/unanswered" />;
    }
    return (
      <div className="new">
        <h1 className="header">New Question</h1>
        <br />
        <div className="new-question-container">
          <div className="new-header">
            <h3 className="WYR-header">Would You Rather...</h3>
          </div>

          <form className="new-question" onSubmit={this.handleSubmit}>
            <input
              placeholder="Category"
              value={category}
              onChange={this.handleCategoryChange}
              className="input-box"
            />
            <hr className="new-hr"/>

            <br />

            <input
              placeholder="Option One"
              value={optionOne}
              onChange={this.handleOptionOneChange}
              className="input-box-option"
            />

            <br />

            <p className="or">-OR-</p>
            <input
              placeholder="Option Two"
              value={optionTwo}
              onChange={this.handleOptionTwoChange}
              className="input-box-option"
            />

            <br />

            <button
              className="submit-button"
              type="submit"
              disabled={optionOne === "" && optionTwo === "" && category === ""}
            >
              Submit
            </button>

            {toHome === false && (
              <p className="error-text">
                Please finish the form before trying to submit!
              </p>
            )}
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(NewQuestion);

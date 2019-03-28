import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { Redirect } from "react-router-dom";

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

    this.props.dispatch(handleAddQuestion(optionOne, optionTwo, category));
    console.log(this.props.questions);

    this.setState(() => ({
      optionOne: "",
      optionTwo: "",
      category: "",
      toHome: true
    }));
  };
  render() {
    const { optionOne, optionTwo, category, toHome } = this.state;

    if (toHome) {
      return <Redirect to="/dashboard/my-questions" />;
    }
    return (
      <div>
        <h3 className="center">Compose New</h3>

        <form className="new-question" onSubmit={this.handleSubmit}>
          <input
            placeholder="Option One"
            value={optionOne}
            onChange={this.handleOptionOneChange}
            className="input-box"
          />

          <input
            placeholder="Option Two"
            value={optionTwo}
            onChange={this.handleOptionTwoChange}
            className="input-box"
          />

          <input
            placeholder="Category"
            value={category}
            onChange={this.handleCategoryChange}
            className="input-box"
          />

          <button
            className="button"
            type="submit"
            disabled={optionOne === "" && optionTwo === "" && category === ""}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(NewQuestion);

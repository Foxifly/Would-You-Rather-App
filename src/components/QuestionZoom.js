import React, { Component } from "react";

class Question extends Component {
  state = {
    option: ""
  };

  handleClick = e => {
    const value = e.target.value;
    console.log(value);
    this.setState({
      option: value
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    //Todo: update the store with the users's choice
  }

  render() {
    const { question, category } = this.props;
    const { option } = this.state;

    return (
      <div>
        <h1>Would you rather...</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="radio">
            <label>
              <input
                onChange={this.handleClick}
                type="radio"
                value="optionOne"
                checked={option === "optionOne"}
              />
              {question.optionOne.text}
            </label>
          </div>

          <div className="radio">
            <label>
              <input
                onChange={this.handleClick}
                type="radio"
                value="optionTwo"
                checked={option === "optionTwo"}
              />
              {question.optionTwo.text}
            </label>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Question;

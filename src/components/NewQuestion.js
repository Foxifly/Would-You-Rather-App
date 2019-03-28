import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { Redirect } from "react-router-dom";

class NewQuestion extends Component {
  state = {
    text: ""
  };
  handleChange = e => {
    const text = e.target.value;

    this.setState(() => ({
      text
    }));
  };
  handleSubmit = e => {
    e.preventDefault();

    const { text } = this.state;
    const { dispatch } = this.props;

    this.props.dispatch(handleAddQuestion("hello", text, "hey"));
    console.log(this.props.questions)

    this.setState(() => ({
      text: "",
      toHome: true
    }));
  };
  render() {
    const { text, toHome } = this.state;

    if (toHome) {
      return <Redirect to="/dashboard/my-questions" />;
    }
    return (
      <div>
        <h3 className="center">Compose New</h3>

        <form className="new-question" onSubmit={this.handleSubmit}>
          <textarea
            placeholder="What's up?"
            value={text}
            onChange={this.handleChange}
            className="textarea"
            maxLength={280}
          />

          <button className="button" type="submit" disabled={text === ""}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(NewQuestion);

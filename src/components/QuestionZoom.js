import React, { Component } from "react";
import {connect} from 'react-redux'

class Question extends Component {

  render() {
    const { currQuestion } = this.props.location.state;
    console.log("curr", currQuestion)

    return (
      <div>
{console.log(this.props)}

            <div>
<h2>h{//question.optionOne.text
}</h2>
<h2>{//question.optionTwo.text
}</h2>
</div>


      </div>
    );
  }
}




export default connect()(Question);

import React, { Component } from 'react';

class QuizQuestionButton extends Component {
  handleClick() {
    this.props.clickHandler(this.props.button_text);
  }

  render() {
    const { button_text } = this.props;
    return (
      <li>
        <button className="btn btn-secondary" onClick={this.handleClick.bind(this)}>
          {button_text}
        </button>
      </li>

    );
  }
}

export default QuizQuestionButton;

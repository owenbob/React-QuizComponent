import React, { Component } from 'react';

import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {
  handleClick(buttonText) {
    if (buttonText === this.props.quiz_question.answer) {
      this.props.showNextQuestionHandler();
    }
  }

  render() {
    const { quiz_question } = this.props;
    return (
      <main>
        <section>
          <p>{quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            <li>
              {this.props.quiz_question.answer_options.map((answer_option, index) => <QuizQuestionButton key={index} button_text={answer_option} clickHandler={this.handleClick.bind(this)} />)}
            </li>
          </ul>
        </section>
      </main>
    );
  }
}

export default QuizQuestion;

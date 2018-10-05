import React, { Component } from 'react';

import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incorrectAnswer: false,
    };
  }

  handleClick(buttonText) {
    if (buttonText === this.props.quiz_question.answer) {
      this.setState({ incorrectAnswer: false });
      this.props.showNextQuestionHandler();
    } else {
      this.setState({
        incorrectAnswer: true,
      });
    }
  }

  render() {
    const { quiz_question } = this.props;
    return (
      <main>
        <div class="card-header">
        <section>
          <p>{quiz_question.instruction_text}</p>
        </section>
        </div>
        <section className="buttons">
          <ul>
            <li>
              {this.props.quiz_question.answer_options.map((answer_option, index) => <QuizQuestionButton key={index} button_text={answer_option} clickHandler={this.handleClick.bind(this)} />)}
            </li>
          </ul>
        </section>
        {this.state.incorrectAnswer ?
        <div className="col-sm">
          <div className="alert alert-danger"> 
          <p className="error">Sorry,that is not right</p>
          </div>
        </div> : null }
      </main>
    );
  }
}

export default QuizQuestion;

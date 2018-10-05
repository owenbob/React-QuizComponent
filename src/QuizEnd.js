import React, { Component } from 'react';

class QuizEnd extends Component {

  handleResetClick() {
    this.props.resetClickHandler();
  }

  render() {
    return (
      <div>
        <div class="card-header">
        <p>Thanks for playing!</p>
        </div>
        <button className="btn btn-outline-secondary">
        <a href="#" onClick={this.handleResetClick.bind(this)}>Reset Quiz</a>
        </button>
      </div>
    );
  }
}

export default QuizEnd;

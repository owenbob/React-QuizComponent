import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import sinon from 'sinon';
import App from '../../App';

let quizComponentExists = false;
let Quiz;
try {
  Quiz = require('../../Quiz.js').default;
  quizComponentExists = true;
} catch (e) {
  quizComponentExists = false;
}

const fs = require('fs');
const babylon = require('babylon');
const quizData = require('../../quiz_data.json');

describe('Quiz Component', () => {
  it('showNextQuestion() method increments the quiz_position by 1 @quiz-show-next-question-increments-position-state', () => {
    assert(quizComponentExists, "The Quiz component hasn't been created yet.");

    let quiz;

    try {
      quiz = shallow(<Quiz />);
    } catch (e) {
      assert(false, "We weren't able to mount the Quiz component.");
    }

    if (quiz.state().quiz_position) {
      assert(quiz.state().quiz_position == 1, "The Quiz component's state does not have a key named `quiz_position` with the correct value - are you sure you're still setting the component's state to `quizData`?");
      const prev_position = quiz.state().quiz_position;
      try {
        quiz.instance().showNextQuestion();
      } catch (e) {
        assert(false, "There's not a method named `showNextQuestion()` in the Quiz class.");
      }
      assert(quiz.state().quiz_position == prev_position + 1, "The Quiz component state's `quiz_position` value is not being incremented by 1 when the `showNextQuestion()` method is called.");
    }
  });
});

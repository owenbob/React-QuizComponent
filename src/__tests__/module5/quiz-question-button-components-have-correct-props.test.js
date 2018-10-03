import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import App from '../../App';

let quizQuestionComponentExists = false;
let QuizQuestion;
try {
  QuizQuestion = require('../../QuizQuestion.js').default;
  quizQuestionComponentExists = true;
} catch (e) {
  quizQuestionComponentExists = false;
}

let quizQuestionButtonComponentExists = false;
let QuizQuestionButton;
try {
  QuizQuestionButton = require('../../QuizQuestionButton.js').default;
  quizQuestionButtonComponentExists = true;
} catch (e) {
  quizQuestionButtonComponentExists = false;
}

const fs = require('fs');
const quizData = require('../../quiz_data.json');

describe('QuizQuestion Component', () => {
  it('has QuizQuestionButton components with correct props @quiz-question-button-components-have-correct-props', () => {
    assert(quizQuestionComponentExists, "The QuizQuestion component hasn't been created yet.");
    assert(quizQuestionButtonComponentExists, "The QuizQuestionButton component hasn't been created yet.");

    let quizQuestion;

    const mock_prop = {
      instruction_text: 'How many continents are there on Planet Earth?',
      answer_options: ['5', '6', '7', '8'],
    };

    try {
      quizQuestion = shallow(<QuizQuestion quiz_question={mock_prop} />);
    } catch (e) {
      assert(false, "We weren't able to mount the QuizQuestion component.");
    }

    const expectedPropsFirst = {
      key: 0,
      button_text: quizData.quiz_questions[0].answer_options[0],
    };
    const expectedPropsLast = {
      key: 3,
      button_text: quizData.quiz_questions[0].answer_options[quizData.quiz_questions[0].answer_options.length - 1],
    };

    if (quizQuestion.find('QuizQuestionButton').length == 1) {
      assert(false, "The QuizQuestion component isn't displaying multiple QuizQuestionButton components.");
      // this shouldn't run after @quiz-question-component-maps-multiple-button-components
    } else if (quizQuestion.find('QuizQuestionButton').length > 1) {
      // this will run after @quiz-question-component-maps-multiple-button-components
      quizQuestion.find('QuizQuestionButton').forEach((n, index) => {
        const expectedProps = {
          button_text: quizData.quiz_questions[0].answer_options[index],
        };
        assert(n.key() == index, "It doesn't look like the QuizQuestionButton component's `key` props have the correct values.");
        assert(JSON.stringify(n.props()) == JSON.stringify(expectedProps), "It doesn't look like the QuizQuestionButton component's `button_text` props have the correct values.");
      });
    } else {
      assert(false, "Your QuizQuestion component isn't rendering any QuizQuestionButton components.");
    }
  });
});

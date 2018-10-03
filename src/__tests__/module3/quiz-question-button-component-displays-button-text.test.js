import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { assert } from 'chai';
import App from '../../App';

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

describe('QuizQuestionButton Component', () => {
  it('displays correct button text @quiz-question-button-component-displays-button-text', () => {
    assert(quizQuestionButtonComponentExists, "The QuizQuestionButton component hasn't been created yet.");

    let quizQuestionButton;

    const mock_prop = '5';
    try {
      quizQuestionButton = shallow(<QuizQuestionButton button_text={mock_prop} />);
    } catch (e) {
      assert(false, "We weren't able to mount the QuizQuestionButton component.");
    }

    const html = quizQuestionButton.html();
    const div = document.createElement('div');
    div.innerHTML = html;

    assert(div.querySelector('li button') != null, "We can't find a `button` tag that's a child of a single `li` tag in the QuizQuestionButton component's JSX.");
    const button_contents = div.querySelectorAll('li button')[0];
    assert(button_contents.innerHTML == quizData.quiz_questions[0].answer_options[0], "You're not displaying the correct data from the `button_text` prop in the QuizQuestionButton component's JSX.");
  });
});

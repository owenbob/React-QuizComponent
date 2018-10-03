import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
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

describe('QuizQuestionButton Component', () => {
  it('has a render method that returns the correct HTML  @quiz-question-button-component-has-render-method', () => {
    assert(quizQuestionButtonComponentExists, "The QuizQuestionButton component hasn't been created yet.");

    const mock_prop = { button_text: 5 };

    let quizQuestionButton;
    try {
      quizQuestionButton = shallow(<QuizQuestionButton button_text={mock_prop.button_text} />);
    } catch (e) {
      assert(false, "We weren't able to mount the QuizQuestionButton component.");
    }

    const html = quizQuestionButton.html();
    const div = document.createElement('div');
    div.innerHTML = html;

    assert(div.querySelector('li') != null, "We can't find an `li` tag in the QuizQuestionButton component's JSX.");
    assert(div.querySelectorAll('li button') != null, "We can't find a `button` tag that's a child of an `li` tag in the QuizQuestionButton component's JSX.");
    assert(div.querySelectorAll('li button').length == 1, "We found more than one `button` tag that's a child of an `li` tag in the QuizQuestionButton component's JSX, but we'd like for there to be exactly one.");
  });
});

import { assert } from 'chai';

const fs = require('fs');

describe('QuizQuestionButton Component', () => {
  it('exists @quiz-question-button-component-exists', () => {
    let file;
    try {
      file = fs.readFileSync(`${__dirname}/../../QuizQuestionButton.js`).toString();
    } catch (e) {
      assert(false, "The QuizQuestionButton.js file hasn't been created yet.");
    }
  });
});

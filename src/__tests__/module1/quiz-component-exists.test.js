import { assert } from 'chai';

const fs = require('fs');

describe('Quiz Component', () => {
  it('exists @quiz-component-exists', () => {
    let file;
    try {
      file = fs.readFileSync(`${__dirname}/../../Quiz.js`).toString();
    } catch (e) {
      assert(false, "The Quiz.js file hasn't been created yet.");
    }
  });
});

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import App from '../../App';

const fs = require('fs');
const babylon = require('babylon');

describe('QuizQuestionButton Component', () => {
  it('has a QuizQuestionButton class that extends Component @quiz-question-button-component-has-quiz-question-button-class', () => {
    let file;
    try {
      file = fs.readFileSync(`${__dirname}/../../QuizQuestionButton.js`).toString();
    } catch (e) {
      assert(false, "The QuizQuestionButton.js file hasn't been created yet.");
    }

    const ast = babylon.parse(file, { sourceType: 'module', plugins: ['jsx'] });

    let class_declaration_count = 0;

    ast.program.body.forEach((element) => {
      if (element.type == 'ClassDeclaration') {
        if (element.id.name == 'QuizQuestion') {
          if (element.superClass.name == 'Component') {

          } else {
            assert(false, "We found a class named QuizQuestionButton, but it doesn't extend the Component class.");
          }
        }
        class_declaration_count += 1;
      }
    });

    assert(class_declaration_count > 0, "We couldn't find any class declarations.");
    assert(class_declaration_count == 1, "We found more than one class declaration, but there's only supposed to be one class named QuizQuestionButton.");
  });

  it('exports the QuizQuestionButton class as default @quiz-question-button-component-has-quiz-question-button-class', () => {
    let file;
    try {
      file = fs.readFileSync(`${__dirname}/../../QuizQuestionButton.js`).toString();
    } catch (e) {
      assert(false, "The QuizQuestionButton.js file hasn't been created yet.");
    }

    const re = /\nexport default QuizQuestionButton\;*\s*$/g;
    const match = file.match(re);
    assert(match != null && match.length > 0, "We couldn't find `export default QuizQuestionButton` at the end of your QuizQuestionButton.js file.");
  });
});

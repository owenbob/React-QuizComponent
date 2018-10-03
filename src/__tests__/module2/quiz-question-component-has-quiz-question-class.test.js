import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import App from '../../App';

const fs = require('fs');
const babylon = require('babylon');

describe('QuizQuestion Component', () => {
  it('has a QuizQuestion class that extends Component @quiz-question-component-has-quiz-question-class', () => {
    let file;
    try {
      file = fs.readFileSync(`${__dirname}/../../QuizQuestion.js`).toString();
    } catch (e) {
      assert(false, "The QuizQuestion.js file hasn't been created yet.");
    }

    const ast = babylon.parse(file, { sourceType: 'module', plugins: ['jsx'] });

    let class_declaration_count = 0;

    ast.program.body.forEach((element) => {
      if (element.type == 'ClassDeclaration') {
        if (element.id.name == 'QuizQuestion') {
          if (element.superClass.name == 'Component') {

          } else {
            assert(false, "We found a class named QuizQuestion, but it doesn't extend the Component class.");
          }
        }
        class_declaration_count += 1;
      }
    });

    assert(class_declaration_count > 0, "We couldn't find any class declarations.");
    assert(class_declaration_count == 1, "We found more than one class declaration, but there's only supposed to be one class named QuizQuestion.");
  });

  it('exports the QuizQuestion class as default @quiz-question-component-has-quiz-question-class', () => {
    let file;
    try {
      file = fs.readFileSync(`${__dirname}/../../QuizQuestion.js`).toString();
    } catch (e) {
      assert(false, "The QuizQuestion.js file hasn't been created yet.");
    }

    const re = /\nexport default QuizQuestion\;*\s*$/g;
    const match = file.match(re);
    assert(match != null && match.length > 0, "We couldn't find `export default QuizQuestion` at the end of your QuizQuestion.js file.");
  });
});

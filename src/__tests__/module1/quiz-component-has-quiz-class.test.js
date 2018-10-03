import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import App from '../../App';

const fs = require('fs');
const babylon = require('babylon');

describe('Quiz Component', () => {
  it('has a Quiz class that extends Component @quiz-component-has-quiz-class', () => {
    let file;
    try {
      file = fs.readFileSync(`${__dirname}/../../Quiz.js`).toString();
    } catch (e) {
      assert(false, "The Quiz.js file hasn't been created yet.");
    }

    const ast = babylon.parse(file, { sourceType: 'module', plugins: ['jsx'] });

    let class_declaration_count = 0;

    ast.program.body.forEach((element) => {
      if (element.type == 'ClassDeclaration') {
        if (element.id.name == 'Quiz') {
          if (element.superClass.name == 'Component') {

          } else {
            assert(false, "We found a class named Quiz, but it doesn't extend the Component class.");
          }
        }
        class_declaration_count += 1;
      }
    });

    assert(class_declaration_count > 0, "We couldn't find any class declarations.");
    assert(class_declaration_count == 1, "We found more than one class declaration, but there's only supposed to be one class named Quiz.");
  });

  it('exports the Quiz class as default @quiz-component-has-quiz-class', () => {
    let file;
    try {
      file = fs.readFileSync(`${__dirname}/../../Quiz.js`).toString();
    } catch (e) {
      assert(false, "The Quiz.js file hasn't been created yet.");
    }

    const re = /\nexport default Quiz\;*\s*$/g;
    const match = file.match(re);
    assert(match != null && match.length > 0, "We couldn't find `export default Quiz` at the end of your Quiz.js file.");
  });
});

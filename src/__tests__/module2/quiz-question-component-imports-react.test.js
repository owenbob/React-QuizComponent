import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import App from '../../App';

const fs = require('fs');
const babylon = require('babylon');

describe('QuizQuestion Component', () => {
  it('imports the React and Component classes @quiz-question-component-imports-react', () => {
    let file;
    try {
      file = fs.readFileSync(`${__dirname}/../../QuizQuestion.js`).toString();
    } catch (e) {
      assert(false, "The QuizQuestion.js file hasn't been created yet.");
    }

    const ast = babylon.parse(file, { sourceType: 'module', plugins: ['jsx'] });

    let react_class_import_found = false;
    let component_class_import_found = false;

    ast.program.body.forEach((element) => {
      if (element.type == 'ImportDeclaration') {
        element.specifiers.forEach((el) => {
          if (el.type == 'ImportDefaultSpecifier' && el.local.name == 'React') {
            react_class_import_found = true;
          } else if (el.type == 'ImportSpecifier' && el.imported.name == 'Component') {
            component_class_import_found = true;
          }
        });
      }
    });
    assert(react_class_import_found, "You're not importing the React class.");
    assert(component_class_import_found, "You're not importing the Component class.");
  });
});

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import { assert } from 'chai';
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

describe('App Component', () => {
  it('renders Quiz component @app-component-displays-quiz-component', () => {
    assert(quizComponentExists, "The Quiz component hasn't been created yet.");

    const app = mount(<App />);
    assert(app.contains(<Quiz />), 'The App component is not rendering the Quiz component.');
  });
});

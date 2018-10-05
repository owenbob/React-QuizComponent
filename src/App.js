import React, { Component } from 'react';

import './App.css';
import Quiz from './Quiz';

class App extends Component {
  render() {
    return (
      <div className="card">
        <div class="card-body">
          <Quiz />
        </div>
      </div>
    );
  }
}

export default App;

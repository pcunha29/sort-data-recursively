import React from 'react';
import './App.css';

import Challenge from './components/challenge.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4>Sort fetched items and form 2 lists</h4>
        <Challenge />
      </header>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';

function App() {
  const [score, setScore] = useState(0); // [0, ƒ]

  return (
    <div className="App">
      <header className="App-header">
        <h1> {score}</h1>
        {/* update the score state */}
        <button onClick={() => setScore(score + 1)}>
          Increase score
        </button>
      </header>
    </div>
  );
}

export default App;

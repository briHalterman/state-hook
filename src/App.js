import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [score, setScore] = useState(0); // [0, ƒ]
  const [message, setMessage] = useState('Welcome');

  // The effect happens after the render
  useEffect(() => {
    // console.log('useEffect called!');
    document.title = `${message}. Your score is ${score}`;
  }, [message, score]); // add dependencies

  return (
    <div className="App">
      <header className="App-header">
        <h1>{message}</h1>
        <h2> {score}</h2>

        {/* update the score state */}
        <button
          onClick={() => setScore((prevScore) => prevScore - 1)}
        >
          Decrease score
        </button>
        <button
          onClick={() => setScore((prevScore) => prevScore + 1)}
        >
          Increase score
        </button>
        <button onClick={() => setScore(0)}>Reset score</button>
      </header>
    </div>
  );
}

export default App;

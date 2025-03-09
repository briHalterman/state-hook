import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [score, setScore] = useState(0); // [0, ƒ]
  const [message, setMessage] = useState('Welcome');
  const [data, setData] = useState('');

  // The effect happens after the render
  useEffect(() => {
    // console.log('useEffect called!');
    document.title = `${message}. Your score is ${score}`;
  }, [message, score]); // add dependencies

  useEffect(() => {
    console.log('useEffect called!');
    fetch('https://api.thecatapi.com/v1/images/search')
      .then((res) => res.json())
      .then((data) => setData(data[0].url)) // Extract image URL
      .catch((err) => console.log('Oh noes!', err));
  }, []);

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
        <div className="App">
          <img src={data} alt="Random cat(s)" />
        </div>
      </header>
    </div>
  );
}

export default App;

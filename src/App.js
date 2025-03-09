import React, { useState } from 'react';
import './App.css';

function App() {
  const [score, setScore] = useState(0); // [0, ƒ]

  return <h1>{score}</h1>;
}

export default App;

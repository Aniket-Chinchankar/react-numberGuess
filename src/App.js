import React, { useState } from 'react';
import './App.css';

function App() {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const handleInputChange = (e) => {
    setGuess(e.target.value);
  };

  const handleGuess = () => {
    const userGuess = Number(guess);
    setAttempts(attempts + 1);

    if (userGuess < randomNumber) {
      setMessage('Too Low!');
    } else if (userGuess > randomNumber) {
      setMessage('Too High!');
    } else {
      setMessage(`Correct! You guessed it in ${attempts + 1} attempts.`);
    }
    setGuess('');
  };

  const handleRestart = () => {
    setRandomNumber(generateRandomNumber());
    setGuess('');
    setMessage('');
    setAttempts(0);
  };

  return (
    <div className="game">
      <h1>Number Guessing Game</h1>
      <p>Guess a number between 1 and 100</p>
      <input
        type="number"
        value={guess}
        onChange={handleInputChange}
        placeholder="Enter your guess"
      />
      <button onClick={handleGuess}>Submit Guess</button>
      <button onClick={handleRestart}>Restart Game</button>
      <p className="message">{message}</p>
    </div>
  );
}

export default App;

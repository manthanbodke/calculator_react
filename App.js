import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to handle input from the buttons
  const handleClick = (value) => {
    (input === '0')?setInput(value):setInput(input + value);
  };

  // Function to calculate the result
  const calculateResult = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult('Error');
    }
  };

  // Function to clear the input and result
  const clearInput = () => {
    setInput('');
    setResult('');
  };

  // Function to toggle between light and dark modes
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="calculator">
        <div className="theme-toggle">
          <button onClick={toggleTheme}>
            {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
        </div>
        <div className="display">
          <input type="text" value={input||0} readOnly />
          <div className="result">{result}</div>
        </div>
        <div className="keypad">
          <button onClick={clearInput}>C</button>
          <button onClick={() => handleClick('(')}>(</button>
          <button onClick={() => handleClick(')')}>)</button>
          <button onClick={() => handleClick('/')}>/</button>

          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('*')}>*</button>

          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('-')}>-</button>

          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('+')}>+</button>

          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={() => handleClick('.')}>.</button>
          <button onClick={calculateResult}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
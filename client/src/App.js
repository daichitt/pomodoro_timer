import logo from './logo.svg';
import './App.css';


import './input.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/common/Header'


const App = () => {
  const [sessionTime, setSessionTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timer, setTimer] = useState(sessionTime * 60);

  const startTimer = () => {
    setTimerRunning(true);
  };

  const stopTimer = () => {
    setTimerRunning(false);
  };

  const resetTimer = () => {
    setTimer(sessionTime * 60);
  };

  const tick = () => {
    if (timerRunning) {
      setTimer(timer - 1);
    }
  };

  setInterval(tick, 1000);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    // Header
    <>
    <Header />
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Pomodpro</h1>
      <div className="flex flex-row items-center justify-center mt-4">
        <div className="mr-4">
          <h2 className="text-2xl font-bold">Session Time</h2>
          <input
            type="number"
            value={sessionTime}
            onChange={(event) => setSessionTime(event.target.value)}
            className="border-2 border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Break Time</h2>
          <input
            type="number"
            value={breakTime}
            onChange={(event) => setBreakTime(event.target.value)}
            className="border-2 border-gray-300 rounded-md p-2"
          />
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-2xl font-bold">Timer</h2>
        <h3 className="text-4xl font-bold">{formatTime(timer)}</h3>
      </div>
      <div className="flex flex-row items-center justify-center mt-4">
        <button
          type="button"
          onClick={startTimer}
          className="bg-green-500 text-white rounded-md px-4 py-2"
        >
          Start
        </button>
        <button
          type="button"
          onClick={stopTimer}
          className="bg-red-500 text-white rounded-md px-4 py-2 ml-4"
        >
          Stop
        </button>
        <button
          type="button"
          onClick={resetTimer}
          className="bg-blue-500 text-white rounded-md px-4 py-2 ml-4"
        >
          Reset
        </button>
      </div>
    </div>
    </>
  );
};


// function App() {
  
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>

//       <div className="flex flex-col justify-center items-center">
//         <h1 className="text-3xl font-bold mb-8">Hello, world!</h1>
//         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Click me!</button>
//       </div>
//     </div>
//   );
// }

export default App;

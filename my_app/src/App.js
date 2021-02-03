import { useState } from 'react';
import Timer from './components/Timer';
import Control from './components/Control';


const DEFAULT_SESSION = 25 * 60;  // 25 min
const DEFAULT_BREAK = 5 * 60;  // 5 min


const App = () => {
  const [session, setSession] = useState(DEFAULT_SESSION);
  const [rest, setRest] = useState(DEFAULT_BREAK);
  const [isRunning, setIsRunning] = useState(false);  // Timer not running

  return (
    <div className="container-fluid p-3">
      <h1 className="text-center mb-4">Pomodoro Timer</h1>

      <Timer DEFAULT_SESSION={DEFAULT_SESSION} DEFAULT_BREAK={DEFAULT_BREAK} session={session} rest={rest} isRunning={isRunning} setSession={setSession} setRest={setRest} setIsRunning={setIsRunning} />

      <div id="controls-container" className="d-flex justify-content-center flex-wrap">
        <Control length={session} setLength={setSession} type="session" isRunning={isRunning} />
        <Control length={rest} setLength={setRest} type="break" isRunning={isRunning} />
      </div>

      <footer className="small">Created by Vivian S for <a href="https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-25--5-clock" target="_blank" rel="noopener noreferrer">freeCodeCamp</a></footer>
    </div>
  );
};  // End <App />


export default App;

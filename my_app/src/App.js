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
    <div>
      <h1>Pomodoro Timer</h1>

      <Timer DEFAULT_SESSION={DEFAULT_SESSION} DEFAULT_BREAK={DEFAULT_BREAK} session={session} rest={rest} setSession={setSession} setRest={setRest} isRunning={isRunning} setIsRunning={setIsRunning} />

      <Control length={session} setLength={setSession} type="session" />
      <Control length={rest} setLength={setRest} type="break" />
    </div>
  );
};  // End <App />


export default App;

import { useState } from 'react';
import Timer from './components/Timer';


const DEFAULT_SESSION = 25 * 60;  // 25 min
const DEFAULT_BREAK = 5 * 60;  // 5 min


const App = () => {
  const [session, setSession] = useState(DEFAULT_SESSION);
  const [rest, setRest] = useState(DEFAULT_BREAK);
  const [isRunning, setIsRunning] = useState(false);  // Timer not running

  return (
    <div>
      <h1>Pomodoro Timer</h1>

      <Timer session={session} rest={rest} isRunning={isRunning} setIsRunning={setIsRunning} />
    </div>
  );
};  // End <App />


export default App;

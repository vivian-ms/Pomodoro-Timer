import { useState, useEffect } from 'react';

// Function to display time in mm:ss format
const formatTime = time => {
  let sec = (time % 60).toString().padStart(2, '0');
  let min = Math.floor(time / 60).toString().padStart(2, '0');
  return `${min}:${sec}`;
};  // End formatTime()


const Timer = ({ DEFAULT_SESSION, DEFAULT_BREAK, session, rest, isRunning, setSession, setRest, setIsRunning }) => {
  const [formattedTime, setFormattedTime] = useState(formatTime(session));
  const [timeLeft, setTimeLeft] = useState(session);

  useEffect(() => {
    setFormattedTime(formatTime(timeLeft));
  }, [timeLeft]);

  const start_stop = () => {
      // Start timer
    if (!isRunning) {
      setIsRunning(setInterval(() => {
        setTimeLeft(prevTimeLeft => {
          if (prevTimeLeft > 0) {
            return prevTimeLeft - 1;
          } else {
            return prevTimeLeft;
          }
        });
      }, 1000));

      // Pause timer
    } else {
      clearInterval(isRunning);
      setIsRunning(false);
    }
  };  // End start_stop()

  const reset = () => {
      // Stop timer if running
    if (isRunning) {
      clearInterval(isRunning);
      setIsRunning(false);
    }

      // Reset session and break length to the default
    setSession(DEFAULT_SESSION);
    setRest(DEFAULT_BREAK);

      // Set time left to default session length
    setTimeLeft(DEFAULT_SESSION);
    setFormattedTime(formatTime(DEFAULT_SESSION)); 
  };  // End reset()

  return (
    <div id="timer">
      <h2 id="timer-label">Session</h2>
      <p id="time-left">{formattedTime}</p>
      <button id="start_stop" onClick={start_stop}>Start/Pause</button>
      <button id="reset" onClick={reset}>Reset</button>
    </div>
  );
};  // End <Timer />

export default Timer;

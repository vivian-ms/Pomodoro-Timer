import { useState } from 'react';

// Function to display time in mm:ss format
const formatTime = time => {
  let sec = (time % 60).toString().padStart(2, '0');
  let min = Math.floor(time / 60).toString().padStart(2, '0');
  return `${min}:${sec}`;
};  // End formatTime()


const Timer = ({ session, rest, isRunning, setIsRunning }) => {
  const [formattedTime, setFormattedTime] = useState(formatTime(session));
  const [timeLeft, setTimeLeft] = useState(session);

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

  return (
    <div id="timer">
      <h2 id="timer-label">Session</h2>
      <p id="time-left">{formattedTime}</p>
      <button id="start_stop" onClick={start_stop}>Start/Pause</button>
      <button id="reset">Reset</button>
    </div>
  );
};  // End <Timer />

export default Timer;

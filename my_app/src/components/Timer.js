import { useState, useEffect, useRef } from 'react';


// Function to display time in mm:ss format
const formatTime = time => {
  let sec = (time % 60).toString().padStart(2, '0');
  let min = Math.floor(time / 60).toString().padStart(2, '0');
  return `${min}:${sec}`;
};  // End formatTime()


const Timer = ({ DEFAULT_SESSION, DEFAULT_BREAK, session, rest, isRunning, setSession, setRest, setIsRunning }) => {
  const [formattedTime, setFormattedTime] = useState(formatTime(session));
  const [timeLeft, setTimeLeft] = useState(session);
  const [type, setType] = useState('Session');
  const audioRef = useRef(null);


  useEffect(() => {
    if (type === 'Session') {
      setTimeLeft(session);
    }
  }, [type, session]);  // End useEffect()


  useEffect(() => {
    if (type === 'Break') {
      setTimeLeft(rest);
    }
  }, [type, rest]);  // End useEffect()


  useEffect(() => {
    setFormattedTime(formatTime(timeLeft));

    if (timeLeft === 0) {
      audioRef.current.play();
    }

    if (timeLeft < 0) {
      if (type === 'Session') {
        setType('Break');
        setTimeLeft(rest);
      } else if (type === 'Break') {
        setType('Session');
        setTimeLeft(session);
      }
    }
  }, [timeLeft, type, session, rest]);  // End useEffect()


  const start_stop = () => {
      // Start timer
    if (!isRunning) {
      setIsRunning(setInterval(() => {
        setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
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
    setType('Session');

      // If audio is playing, stop it and rewind to the beginning
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };  // End reset()


  return (
    <div id="timer-container" className="mx-auto p-3">
      <div id="timer">
        <h2 id="timer-label" className="label">{type}</h2>
        <p id="time-left" className="display-4 time">{formattedTime}</p>
        <button id="start_stop" className="btn btn-outline-primary mr-3" onClick={start_stop}>Start/Pause</button>
        <button id="reset" className="btn btn-outline-danger" onClick={reset}>Reset</button>
        <audio id="beep" ref={audioRef} src="https://www.soundjay.com/door/sounds/doorbell-5.mp3" />
      </div>
    </div>
  );
};  // End <Timer />


export default Timer;

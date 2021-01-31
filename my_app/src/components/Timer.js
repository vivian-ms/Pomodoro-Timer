// Function to display time in mm:ss format
const formatTime = time => {
  let sec = (time % 60).toString().padStart(2, '0');
  let min = Math.floor(time / 60).toString().padStart(2, '0');
  return `${min}:${sec}`;
};  // End formatTime()


const Timer = ({ session, rest }) => {
  return (
    <div id="timer">
      <h2 id="timer-label">Session</h2>
      <p id="time-left">25:00</p>
      <button id="start_stop">Start/Pause</button>
      <button id="reset">Reset</button>
    </div>
  );
};  // End <Timer />

export default Timer;

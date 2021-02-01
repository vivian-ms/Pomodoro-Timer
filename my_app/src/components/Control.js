const Control = ({ length, setLength, type, isRunning }) => {
  const increment = () => {
      // Increment 1 min (60 sec)
    setLength(prevLength => prevLength + 60);
  };

  const decrement = () => {
      // Decrement 1 min (60 sec)
    setLength(prevLength => prevLength - 60);
  };

  return (
    <div id="control">
      <h3 id={`${type}-label`}>
        {`${type[0].toUpperCase()}${type.substring(1)} Length`}
      </h3>
      <p id="length-container">
        <span id={`${type}-length`}>{length / 60}</span> min
      </p>

      {/* Disable buttons if timer is running */}
      {/* Disable decrement if length < 1 min */}
      <button id={`${type}-decrement`} onClick={decrement} disabled={(!isRunning && length > 60) ? false : true}>-</button>

      {/* Disable increment if length > 60 min */}
      <button id={`${type}-increment`} onClick={increment} disabled={(!isRunning && length < 3600) ? false : true}>+</button>
    </div>
  );
};  // End <Control />


export default Control;

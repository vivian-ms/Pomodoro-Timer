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
    <div id="control-container" className="mx-4 my-3">
      <div id="control">
        <h3 id={`${type}-label`} className="label">
          {`${type[0].toUpperCase()}${type.substring(1)} Length`}
        </h3>
        <p id="length-container" className="h4 p-2">
          <span id={`${type}-length`}>{length / 60}</span> min
        </p>

        {/* Disable buttons if timer is running */}
        {/* Disable decrement if length < 1 min */}
        <button id={`${type}-decrement`} className="btn btn-outline-primary btn-sm mr-3" onClick={decrement} disabled={(!isRunning && length > 60) ? false : true}>
          <i className="fas fa-minus"></i>
        </button>

        {/* Disable increment if length > 60 min */}
        <button id={`${type}-increment`} className="btn btn-outline-primary btn-sm" onClick={increment} disabled={(!isRunning && length < 3600) ? false : true}>
          <i className="fas fa-plus"></i>
        </button>
      </div>
    </div>
  );
};  // End <Control />


export default Control;

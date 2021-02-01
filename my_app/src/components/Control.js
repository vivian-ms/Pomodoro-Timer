const Control = ({ length, setLength, type }) => {
  const increment = () => {
    if (length < 3600) {
      setLength(prevLength => prevLength + 60);
    }
  };

  const decrement = () => {
    if (length > 60) {
      setLength(prevLength => prevLength - 60);
    }
  };

  return (
    <div id="control">
      <h3 id={`${type}-label`}>
        {`${type[0].toUpperCase()}${type.substring(1)} Length`}
      </h3>
      <p id="length-container">
        <span id={`${type}-length`}>{length / 60}</span> min
      </p>
      <button id={`${type}-decrement`} onClick={decrement}>-</button>
      <button id={`${type}-increment`} onClick={increment}>+</button>
    </div>
  );
};  // End <Control />


export default Control;

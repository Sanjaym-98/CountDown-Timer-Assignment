import { useState, useEffect } from 'react';

function App() {
  const [countdown, setCountdown] = useState(0);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    let countdownInterval = null;
    if (countdown > 0) {
      countdownInterval = setInterval(() => {
        setCountdown(countdown - 1);
      }, 1000);
    }
    return () => clearInterval(countdownInterval);
  }, [countdown]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const inputValueAsNumber = Math.floor(Number(inputValue));
      setCountdown(inputValueAsNumber);
      setInputValue("");
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        id="timeCount"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <div id="current-time">{countdown}</div>
    </div>
  );
}

export default App;
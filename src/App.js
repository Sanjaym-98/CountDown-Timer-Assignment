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

       <h1>Counter Timer</h1>
      <input
      
        id="timeCount"
        type="text"
        placeholder='Enter the Counter Time'
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
          <div id="currenttime"><h1>{countdown}</h1></div>
    </div>
  );
}

export default App;
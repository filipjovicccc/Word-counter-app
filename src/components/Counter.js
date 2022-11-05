import React, { useState, useRef } from "react";

function Counter() {
  const [characterCounter, setCharacterCounter] = useState(0);
  const [wordCounter, setWordCounter] = useState(0);
  const [input, setInput] = useState(" ");
  const [inputLock, setInputLock] = useState(false);
  const inputChangeHandler = (e) => {
    if (e.target.value) {
      setCharacterCounter((count) => count + 1);
    }
    setInput(e.target.value);
    const expmp = input.split(" ");

    setWordCounter(expmp.length);
  };

  
  return (
    <div>
      <div>
        <label htmlFor=""></label>
        <input
         
    
          onChange={inputChangeHandler}
          //   value={controlledValue}
          className="input"
          type="text"
        />
        <div>
          <h1>Word Counter</h1>
          <p>{wordCounter}</p>
        </div>
      </div>
      <div>
        <h1>Characters Counter</h1>
        <p>{characterCounter}</p>
      </div>
    </div>
  );
}

export default Counter;

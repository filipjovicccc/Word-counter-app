import React, { useState, useRef } from "react";
import "./Counter.css";
import { HiOutlineRefresh } from "react-icons/hi";

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
  const style = { color: "#545454", fontSize: "2.5em" };

  const clearRefresherHandler = (e) => {
    setCharacterCounter(0);
    setWordCounter(0);
    setInput("");
  };

  return (
    <div className="wrapper">
      <div className="header">
        <h1>Word counter</h1>

        <HiOutlineRefresh style={style} />
        <button onClick={clearRefresherHandler}></button>
      </div>

      <div className="main">
        <textarea
          onChange={inputChangeHandler}
          placeholder="Enter text here"
          id="textarea"
        ></textarea>

        <div className="section">
          <div className="section-wrapp">
            <h3>Words:</h3>
            <p>{wordCounter}</p>
          </div>

          <div className="section-wrapp">
            <h3>Characters:</h3>
            <p>{characterCounter}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;

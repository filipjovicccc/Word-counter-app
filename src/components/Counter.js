import React, { useState, useRef } from "react";
import "./Counter.css";
import { HiOutlineRefresh } from "react-icons/hi";

function Counter() {
  const [characterCounter, setCharacterCounter] = useState(0);
  const [wordCounter, setWordCounter] = useState(0);
  const inputRef = useRef();

  const inputChangeHandler = (event) => {
    if (event.target.value) {
      const characters = event.target.value.replaceAll(" ", "").trim();

      setCharacterCounter(characters.length);
    }

    const inputChange = inputRef.current.value.trim().split(" ");

    setWordCounter(inputChange.length);
  };

  const clearRefresherHandler = (e) => {
    setCharacterCounter(0);
    setWordCounter(0);
    inputRef.current.value = " ";
  };
  const style = { color: "#545454", fontSize: "2.5em" };

  return (
    <div className="wrapper">
      <div className="header">
        <h1>Word counter</h1>

        <button className="btn" onClick={clearRefresherHandler}>
          <HiOutlineRefresh style={style} />
        </button>
      </div>

      <div className="main">
        <textarea
          onChange={inputChangeHandler}
          placeholder="Enter text here"
          id="textarea"
          ref={inputRef}
        ></textarea>

        <div className="section">
          <div className="section-wrapp">
            <h6>Words:</h6>
            <p>{wordCounter}</p>
          </div>

          <div className="section-wrapp">
            <h6>Characters:</h6>
            <p>{characterCounter}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;

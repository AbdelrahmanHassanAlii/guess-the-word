import React, { useState } from "react";
// import { numberOfTries, numberOfLettersPerTry } from "../index";
import "../css/gameArea.css";
import {
  render,
  convertToUpperCase,
  move,
  handleArrows,
  check,
  hint,
} from "../js/gameArea";
import "../js/gameArea";

//game-options
const numberOfTries = 6;
const numberOfLettersPerTry = 6;

// function to generate inputs based on the nuber of tries and letters per try
const renderInputs = (x, y) => {
  //generate list of tries
  const inputs = [];
  for (let i = 1; i <= x; i++) {
    //generate a list of letters for each try
    const innerInputs = [];
    for (let j = 1; j <= y; j++) {
      innerInputs.push(
        <span key={j}>
          {/* `for accessability */}
          <label htmlFor={`try-${i}-letter-${j}`}> </label>
          <input
            type="text"
            maxLength={1}
            key={j}
            id={`try-${i}-letter-${j}`}
            className={`input guess-${i}-letter-${j}`}
            onChange={convertToUpperCase}
          />
        </span>
      );
    }
    inputs.push(
      <div
        key={i}
        className={`try try-${i} ${i !== 1 ? "disabled-inputs" : ""}`}
      >
        <span className={`try-header`}>Try {i}</span>
        {innerInputs}
      </div>
    );
  }
  return inputs;
};

let handleDisabledInput = () => {
  let disabledInputs = document.querySelectorAll(`.disabled-inputs input`);
  disabledInputs.forEach((input) => {
    input.disabled = true;
  });
};

//function to focus on the frist input on load
window.onload = () => {
  let fristInput = document.querySelector(`.guess-1-letter-1`);
  fristInput.focus();
  handleDisabledInput();
  move();
  handleArrows();
};

export default function GameArea() {
  //handle click on hintButton
  const [hints, setHints] = useState(2);
  let hintFunction = () => {
    if (hints > 0) {
      setHints(hints - 1);
      hint();
    }
    if (hints === 0) {
      document.querySelector(`button.hint`).textContent = `No Hints More`;
      document.querySelector(`button.hint`).style.opacity = 0.5;
    }
  };

  return (
    <div>
      <div className="inputs">
        {renderInputs(numberOfTries, numberOfLettersPerTry)}
      </div>
      <div className="buttons">
        <button
          className="check"
          onClick={() => {
            check(numberOfLettersPerTry, numberOfTries);
          }}
        >
          Check Word 🤔
        </button>
        <button className="hint" onClick={hintFunction}>
          <span>{hints}</span> Hint 🥸
        </button>
      </div>
      <div className="message"></div>
    </div>
  );
}

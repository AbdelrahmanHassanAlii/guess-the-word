import React from "react";
import { numberOfTries, numberOfLettersPerTry } from "../index";
import "../css/gameArea.css";
import { convertToUpperCase } from "../js/gameArea";

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
};

export default function GameArea() {
  return (
    <div>
      <div className="inputs">
        {renderInputs(numberOfTries, numberOfLettersPerTry)}
      </div>
      <div className="buttons">
        <button className="check">Check Word</button>
        <button className="hint">
          <span></span> Hint
        </button>
      </div>
      <div className="message"></div>
    </div>
  );
}

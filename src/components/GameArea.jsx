import React from "react";
import { numberOfTries, numberOfLettersPerTry } from "../index";

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
            key={j}
            id={`try-${i}-letter-${j}`}
            className={`guess-${i}-letter-${j}`}
          />
        </span>
      );
    }
    inputs.push(
      <div key={i} className={`try-${i} ${i !== 1 ? "disabled-inputs" : ""}`}>
        <span>Try {i}</span>
        {innerInputs}
      </div>
    );
  }
  return inputs;
};

//function to focus on the frist input on load
window.onload = () => {
  let fristInput = document.querySelector(`.guess-1-letter-1`);
  fristInput.focus();
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

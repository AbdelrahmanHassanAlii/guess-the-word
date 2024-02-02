import React from "react";
import { numberOfTries, numberOfLettersPerTry } from "../index";

const renderInputs = (x, y) => {
  const inputs = [];
  for (let i = 1; i <= x; i++) {
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

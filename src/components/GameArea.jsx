import React from "react";

export default function GameArea() {
  return (
    <div>
      <div className="inputs"></div>
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

import React from "react";

export default function GameArea() {
  return (
    <div>
      <div className="inputs"></div>
      <div className="buttons">
        <div className="check">Check Word</div>
        <div className="hint">
          <span></span> Hint
        </div>
      </div>
      <div className="message"></div>
    </div>
  );
}

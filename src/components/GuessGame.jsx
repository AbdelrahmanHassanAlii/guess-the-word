import React from "react";
import GameArea from "./GameArea";
import GuideArea from "./GuideArea";

export default function GuessGame() {
  return (
    <div className="guess-game">
      <GuideArea />
      <GameArea />
    </div>
  );
}

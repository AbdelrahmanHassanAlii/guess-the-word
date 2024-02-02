import React from "react";
import GameArea from "./GameArea";
import GuideArea from "./GuideArea";
import '../css/guessGame.css'

export default function GuessGame() {
  return (
    <div className="guess-game">
      <GuideArea />
      <GameArea />
    </div>
  );
}

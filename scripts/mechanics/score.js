//This script is about updating current score and a high score
import { score } from "../state/scoreState";
import { setMatrix } from "./matrix";
import { bridge } from "./bridge";
import { movement } from "./movement";

export const updateScore = (newScore) => {
  //get score elements
  const currentScoreElement = document.getElementById("currentScore");
  const highScoreElement = document.getElementById("highScore");

  let highScoreText = highScoreElement.innerText;

  //update score state
  score.addCurrentScore(newScore);

  //check if the current score is higher then highscore
  if (score.currentScore > score.highScore) {
    score.setHighScore(score.currentScore);
    highScoreElement.innerText = score.highScore;
  }

  //update current score text
  currentScoreElement.innerText = score.currentScore;
};

//set restart button
export const resetCurrentScoreBtn = () => {
  document.getElementById("resetScoreButton").addEventListener("click", () => {
    score.resetCurrentScore();
    updateScore(0);
    setMatrix();
    movement();
    bridge();
  });
};

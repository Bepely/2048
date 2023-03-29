//This script is about updating current score and a high score
import { score } from "../state/scoreState";

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

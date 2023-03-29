//This script is about a state of the score
export const score = {
  currentScore: 0,
  highScore: 0,

  addCurrentScore: (toAdd) => {
    score.currentScore = score.currentScore + toAdd;
  },
  resetCurrentScore: () => {
    score.currentScore = 0;
  },

  setHighScore: (newHighScore) => {
    score.highScore = newHighScore;
  },
};

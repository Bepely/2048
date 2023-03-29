//This script is about a current state of the grid
export const grid = {
  matrix: [],
  setMatrix: (e) => {
    grid.matrix = e;
  },
  getMatrix: () => {
    return grid.matrix;
  },

  currentProcess: 0,
  setCurrentProcess: (value) => {
    grid.currentProcess = value;
  },

  svg: {
    getGameField: () => {
      return document.getElementById("gameField");
    },
    getAllBlocks: () => {
      return document.querySelectorAll(".blockGroup");
    },
    getAllBlockBacks: () => {
      return document.querySelectorAll(".blockBack");
    },
    getAllBlockTexts: () => {
      return document.querySelectorAll(".blockText");
    },
  },
};

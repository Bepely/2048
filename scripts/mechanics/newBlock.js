//this script is about creating a new random block

import { grid } from "../state/gridState";

export const newBlock = () => {
  let matrix = grid.getMatrix();
  //create a random cell
  let randomCol = 0;
  let randomRow = 0;
  let blockValue = 2;

  //generate random cell coord
  const setRandomBlock = () => {
    let availableCells = [];

    //find all available cells
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === 0) {
          availableCells.push([i, j]);
        }
      }
    }

    //exit if no cells are available
    if (availableCells.length === 0) {
      return;
    }

    //select a random cell
    const randomIndex = Math.floor(Math.random() * availableCells.length);
    randomCol = availableCells[randomIndex][0];
    randomRow = availableCells[randomIndex][1];

    //set block value
    matrix[randomCol][randomRow] = blockValue;
    grid.setMatrix(matrix);
  };

  setRandomBlock();
};

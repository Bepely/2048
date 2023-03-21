//This script is about showing matrix on a display

import { grid } from "../state/gridState";

export const bridge = () => {
  const matrix = grid.getMatrix();
  const blocks = grid.svg.getAllBlocks();
  const blockBacks = grid.svg.getAllBlockBacks();
  const blockTexts = grid.svg.getAllBlockTexts();

  //move combine matrix with svg
  let counter = -1;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      counter++;
      if (matrix[i][j] != 0) {
        console.log(`Current counter is | ${counter}`);
        blockTexts[counter].innerHTML = matrix[i][j];
      }
    }
  }
};

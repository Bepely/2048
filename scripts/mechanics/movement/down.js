//move down script
import { grid } from "../../state/gridState";

export const moveDown = (matrix) => {
  const size = matrix.length;
  //create a new matrix
  const newMatrix = [];

  //iterate columns
  for (let j = size - 1; j >= 0; j--) {
    let newColumn = [];

    //populate non 0 blocks first in the column
    for (let i = size - 1; i >= 0; i--) {
      if (matrix[i][j] !== 0) {
        newColumn.push(matrix[i][j]);
      }
    }

    //combine adjacent equal blocks
    for (let i = newColumn.length - 1; i > 0; i--) {
      if (newColumn[i] === newColumn[i - 1]) {
        newColumn[i] *= 2;
        newColumn[i - 1] = 0;
        i--;
      }
    }

    //populate non 0 blocks again, after combining
    let nonZeroBlocks = newColumn.filter((block) => block !== 0);

    //fill rest of the blocks with 0
    while (nonZeroBlocks.length < size) {
      nonZeroBlocks.unshift(0);
    }

    //push updated column to a matrix
    newMatrix.push(nonZeroBlocks.reverse());
  }

  //update a "true" matrix
  grid.setMatrix(newMatrix);
};

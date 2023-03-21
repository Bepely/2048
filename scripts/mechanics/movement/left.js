//move left script
import { grid } from "../../state/gridState";

export const moveLeft = (matrix) => {
  const size = matrix.length;
  //create a new matrix
  const newMatrix = [];

  //iterate rows
  for (let i = 0; i < size; i++) {
    let newRow = [];

    //populate non 0 blocks first in the row
    for (let j = 0; j < size; j++) {
      if (matrix[i][j] !== 0) {
        newRow.push(matrix[i][j]);
      }
    }

    //combine adjacent equal blocks
    for (let j = 0; j < newRow.length - 1; j++) {
      if (newRow[j] === newRow[j + 1]) {
        newRow[j] *= 2;
        newRow[j + 1] = 0;
      }
    }

    //populate non 0 blocks again, after combining
    let nonZeroBlocks = newRow.filter((block) => block !== 0);

    //fill rest of the blocks with 0
    while (nonZeroBlocks.length < size) {
      nonZeroBlocks.push(0);
    }

    //push updated row to a matrix
    newMatrix.push(nonZeroBlocks);
  }

  //update a "true" matrix
  grid.setMatrix(newMatrix);
};

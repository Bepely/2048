import { grid } from "../../state/gridState";

export const moveDown = (matrix) => {
  const size = matrix.length;

  //iterate columns
  for (let j = size - 1; j >= 0; j--) {
    let nonZeroBlocks = [];
    //populate non 0 blocks first in the column
    for (let i = size - 1; i >= 0; i--) {
      if (matrix[i][j] !== 0) {
        nonZeroBlocks.push(matrix[i][j]);
      }
    }

    //combine adjacent equal blocks
    for (let i = nonZeroBlocks.length - 1; i > 0; i--) {
      if (nonZeroBlocks[i] === nonZeroBlocks[i - 1]) {
        nonZeroBlocks[i] *= 2;
        nonZeroBlocks[i - 1] = 0;
        i--;
      }
    }

    //populate non 0 blocks again, after combining
    nonZeroBlocks = nonZeroBlocks.filter((block) => block !== 0);

    //fill rest of the blocks with 0
    while (nonZeroBlocks.length < size) {
      nonZeroBlocks.push(0);
    }

    //update column in the original matrix
    for (let i = size - 1; i >= 0; i--) {
      matrix[i][j] = nonZeroBlocks[size - i - 1];
    }
  }

  //update the grid with the updated matrix
  grid.setMatrix(matrix);
};

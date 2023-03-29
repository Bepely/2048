import { grid } from "../../state/gridState";
import { score } from "../../state/scoreState";
import { updateScore } from "../score";

export const moveDown = (matrix) => {
  const size = matrix.length;

  //transpose the matrix
  const transposedMatrix = matrix[0].map((col, i) =>
    matrix.map((row) => row[i])
  );

  //iterate rows
  for (let i = 0; i < size; i++) {
    let nonZeroBlocks = [];
    //populate non 0 blocks first in the row
    for (let j = 0; j < size; j++) {
      if (transposedMatrix[i][j] !== 0) {
        nonZeroBlocks.push(transposedMatrix[i][j]);
      }
    }

    //combine adjacent equal blocks
    for (let j = 0; j < nonZeroBlocks.length - 1; j++) {
      if (nonZeroBlocks[j] === nonZeroBlocks[j + 1]) {
        nonZeroBlocks[j] *= 2;

        updateScore(nonZeroBlocks[j]);
        nonZeroBlocks[j + 1] = 0;
        console.log(score.currentScore);
      }
    }

    //populate non 0 blocks again, after combining
    nonZeroBlocks = nonZeroBlocks.filter((block) => block !== 0);

    //fill rest of the blocks with 0
    while (nonZeroBlocks.length < size) {
      nonZeroBlocks.unshift(0);
    }

    //update row in the transposed matrix
    for (let j = 0; j < size; j++) {
      transposedMatrix[i][j] = nonZeroBlocks[j];
    }
  }

  //transpose the matrix back to original form
  const newMatrix = transposedMatrix[0].map((col, i) =>
    transposedMatrix.map((row) => row[i])
  );

  //update the grid with the updated matrix
  grid.setMatrix(newMatrix);
};

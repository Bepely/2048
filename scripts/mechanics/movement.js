//This script is about handling movement
import { grid } from "../state/gridState";

//Make movement variables
let size = 0;

export const movement = () => {
  //create a movement matrix
  let matrix = grid.getMatrix();
  size = matrix.length;
  document.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "ArrowLeft":
        moveLeft(matrix);
        break;
      case "ArrowUp":
        moveUp(matrix);
        break;
      case "ArrowRight":
        moveRight(matrix);
        break;
      case "ArrowDown":
        moveDown(matrix);
        break;
    }
    //update movement matrix
    matrix = grid.getMatrix();
    console.log(grid.getMatrix());
  });
};

function moveLeft(matrix) {
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
}

function moveUp(matrix) {
  const size = matrix.length;
  //create a new matrix
  const newMatrix = [];

  //iterate columns
  for (let j = 0; j < size; j++) {
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
}

function moveRight(matrix) {
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
      nonZeroBlocks.unshift(0);
    }

    //push updated row to a matrix
    newMatrix.push(nonZeroBlocks);
  }

  //update a "true" matrix
  grid.setMatrix(newMatrix);
}

function moveDown(matrix) {
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
}

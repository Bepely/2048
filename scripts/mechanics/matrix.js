//This script is about Grid Matrix generation and handling
import { grid } from "../state/gridState";

//Make a 4x4 martix
export const setMatrix = () => {
  let matrix = [];

  //generate 2 random start cells
  let coord1 = [Math.floor(Math.random() * 4), Math.floor(Math.random() * 4)];
  let coord2 = [Math.floor(Math.random() * 4), Math.floor(Math.random() * 4)];
  while (coord1[0] === coord2[0] && coord1[1] === coord2[1]) {
    coord2 = [Math.floor(Math.random() * 4), Math.floor(Math.random() * 4)];
  }

  //generate a matrix
  for (let i = 0; i < 4; i++) {
    matrix.push([]);
    for (let j = 0; j < 4; j++) {
      if (i === coord1[0] && j === coord1[1]) {
        matrix[i].push(Math.random() > 0.6 ? 4 : 2);
      } else if (i === coord2[0] && j === coord2[1]) {
        matrix[i].push(Math.random() > 0.6 ? 4 : 2);
      } else {
        matrix[i].push(0);
      }
    }
  }
  grid.setMatrix(matrix);
};

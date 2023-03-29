//this script handles dead end of the game
import { grid } from "../state/gridState";


export const deadEnd = () => {
    const matrix = grid.getMatrix()
      //find all available cells
      for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
          if (matrix[i][j] === 0) {
            return false
          }
        }
      }
      return true
};

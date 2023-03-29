//This script is about handling movement
import { grid } from "../state/gridState";
import { score } from "../state/scoreState";
import { newBlock } from "./newBlock";

import { moveDown } from "./movement/down";
import { moveUp } from "./movement/up";
import { moveLeft } from "./movement/left";
import { moveRight } from "./movement/right";
import { setMatrix } from "./matrix";

import { bridge } from "./bridge";
import { deadEnd } from "./deadEnd";
import { updateScore } from "./score";

//Make movement variables
let size = 0;
let matrix = grid.getMatrix();

//Handle inputs and initiate movement
const movementHandler = (event) => {
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

  //check if there is no moves avaliable
  if (deadEnd()) {
    alert(`No more moves
    Your have score: ${score.currentScore} points`);
    score.resetCurrentScore();
    updateScore(0);
    setMatrix();
    movement();
    bridge();
  }

  //check if there was an actual movement of blocks
  if (JSON.stringify(matrix) !== JSON.stringify(grid.getMatrix())) {
    newBlock();
    bridge();

    //update movement matrix
    matrix = grid.getMatrix();
  }
};

//
export const movement = () => {
  //delete previous movement handler
  document.removeEventListener("keydown", movementHandler);

  //update a movement matrix
  matrix = grid.getMatrix();
  size = matrix.length;
  bridge();

  //set up a new movement handler
  document.addEventListener("keydown", movementHandler);
};

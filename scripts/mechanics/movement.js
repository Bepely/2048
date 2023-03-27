//This script is about handling movement
import { grid } from "../state/gridState";
import { newBlock } from "./newBlock";

import { moveDown } from "./movement/down";
import { moveUp } from "./movement/up";
import { moveLeft } from "./movement/left";
import { moveRight } from "./movement/right";

import { bridge } from "./bridge";

//Make movement variables
let size = 0;

export const movement = () => {
  //create a movement matrix
  let matrix = grid.getMatrix();
  size = matrix.length;
  bridge();

  //detect and address key inputs
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

    if (matrix !== grid.getMatrix()) {
      newBlock();
      bridge();
      //update movement matrix
      matrix = grid.getMatrix();
    }
  });
};

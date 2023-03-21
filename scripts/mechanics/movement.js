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

  //detect and address key inputs
  document.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "ArrowLeft":
        moveLeft(matrix);
        newBlock();
        break;
      case "ArrowUp":
        moveUp(matrix);
        newBlock();
        break;
      case "ArrowRight":
        moveRight(matrix);
        newBlock();
        break;
      case "ArrowDown":
        moveDown(matrix);
        newBlock();
        break;
    }
    bridge();
    //update movement matrix
    matrix = grid.getMatrix();
    console.log(grid.getMatrix());
  });
};

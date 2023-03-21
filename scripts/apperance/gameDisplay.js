//This script is about Drawing the grid and blocks on it
import { getRect, getText1, getGroup } from "../elements";
import { grid } from "../state/gridState";

//setting main layout for display
export const setGameDisplay = () => {
  const svgCanvas = document.getElementById("svgCanvas");

  //size of svg element
  const canvasWidth = svgCanvas.clientWidth;
  const canvasHeight = svgCanvas.clientHeight;

  //size of background
  const displayWidth = canvasHeight * 0.75;
  const displayHeight = canvasHeight * 0.75;

  //size of game display
  const displayX = (canvasWidth - displayWidth * 0.95) / 2;
  const displayY = (canvasHeight - displayHeight * 0.95) / 2;

  //create a game field group
  const gameField = getGroup();
  gameField.setAttribute("id", "gameField");

  //iterating through matrix and set up initial game field
  for (let i = 0; i < grid.getMatrix().length; i++) {
    for (let j = 0; j < grid.getMatrix().length; j++) {
      const blockGroup = getGroup();
      blockGroup.setAttribute("class", "blockGroup");

      //create a default block background
      const block = getRect(
        displayX + (displayWidth / grid.getMatrix().length) * j,
        displayY + (displayHeight / grid.getMatrix().length) * i,
        (displayWidth * 0.8) / grid.getMatrix().length,
        (displayHeight * 0.8) / grid.getMatrix().length
      );
      block.setAttribute("fill", "#D9D9D9");
      block.setAttribute("class", "blockBack");

      //create a default text for a block
      const text = getText1(
        displayX +
          (displayWidth / grid.getMatrix().length) * j +
          (displayWidth * 0.4) / grid.getMatrix().length,
        displayY +
          (displayHeight / grid.getMatrix().length) * i +
          (displayHeight * 0.4) / grid.getMatrix().length
      );
      text.setAttribute("class", "blockText");
      text.appendChild(document.createTextNode(""));

      //create a group of block
      blockGroup.appendChild(block);
      blockGroup.appendChild(text);

      gameField.appendChild(blockGroup);
    }
  }
  svgCanvas.appendChild(gameField);
};

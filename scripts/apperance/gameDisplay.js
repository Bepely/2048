//This script is about Drawing the grid and blocks on it
import { getRect, getText1, getGroup } from "../elements";
import { grid } from "../state/gridState";

export const setGameDisplay = () => {
  const svgCanvas = document.getElementById("svgCanvas");

  const canvasWidth = svgCanvas.clientWidth;
  const canvasHeight = svgCanvas.clientHeight;
  const canvasRatio = canvasWidth / canvasHeight;

  const displayWidth = canvasHeight * 0.75;
  const displayHeight = canvasHeight * 0.75;

  const displayX = (canvasWidth - displayWidth * 0.95) / 2;
  const displayY = (canvasHeight - displayHeight * 0.95) / 2;

  const gameField = getGroup();

  for (let i = 0; i < grid.getMatrix().length; i++) {
    for (let j = 0; j < grid.getMatrix().length; j++) {
      const block = getRect(
        displayX + (displayWidth / grid.getMatrix().length) * j,
        displayY + (displayHeight / grid.getMatrix().length) * i,
        (displayWidth * 0.8) / grid.getMatrix().length,
        (displayHeight * 0.8) / grid.getMatrix().length
      );
      block.setAttribute("fill", "#D9D9D9");
      block.setAttribute("class", "blankBlock");

      gameField.appendChild(block);
    }
  }

  svgCanvas.appendChild(gameField);
};

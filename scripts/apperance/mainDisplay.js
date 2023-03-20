//this script sets up an overall display
import { getRect, getGroup } from "../elements";

export const setDisplay = () => {
  const svgCanvas = document.getElementById("svgCanvas");

  let width = svgCanvas.clientWidth;
  let height = svgCanvas.clientHeight;

  const card = getRect(width * 0.05, height * 0.05, width * 0.9, height * 0.9);

  const setCardPos = (toSetCard, startX, startY, width, height) => {
    toSetCard.setAttribute("width", width);
    toSetCard.setAttribute("height", height);
    toSetCard.setAttribute("x", startX);
    toSetCard.setAttribute("y", startY);
  };
  const displayBack = card;
  displayBack.setAttribute("fill", "#ede3d8");
  svgCanvas.appendChild(displayBack);

  const gameFieldBack = card.cloneNode();
  setCardPos(
    gameFieldBack,
    (width - height * 0.8) * 0.5,
    (height - height * 0.8) * 0.5,
    height * 0.8,
    height * 0.8
  );
  gameFieldBack.setAttribute("fill", "#776d64");

  svgCanvas.appendChild(gameFieldBack);
};

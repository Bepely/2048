//This script is about creating and handling elements.
let bodyWidth = 0;
let bodyHeight = 0;
const svgNS = "http://www.w3.org/2000/svg";

//creating an svg element
export const setSvg = () => {
  const svgns = "http://www.w3.org/2000/svg";
  let svg = document.createElementNS(svgns, "svg");
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "100%");
  svg.setAttribute("id", "svgCanvas");
  document.querySelector(".display").appendChild(svg);

  return svg;
};

//line constructor
export const getLine = (startX, startY, endX, endY) => {
  const line = document.createElementNS(svgNS, "line");
  line.setAttribute("x1", `${startX}`);
  line.setAttribute("x2", `${endX}`);
  line.setAttribute("y1", `${startY}`);
  line.setAttribute("y2", `${endY}`);
  line.setAttribute("stroke", "black");
  line.setAttribute("stroke-width", "2");
  line.setAttribute("fill", "none");
  return line;
};

//rect constructor
export const getRect = (x, y, width, height) => {
  const rect = document.createElementNS(svgNS, "rect");
  rect.setAttribute("x", `${x}`);
  rect.setAttribute("y", `${y}`);
  rect.setAttribute("width", `${width}`);
  rect.setAttribute("height", `${height}`);
  rect.setAttribute("stroke", "none");
  rect.setAttribute("fill", "transparent");
  rect.setAttribute("rx", 15);
  return rect;
};

//text constructor
export const getText1 = (x, y) => {
  const text = document.createElementNS(svgNS, "text");
  text.setAttribute("x", `${x}`);
  text.setAttribute("y", `${y}`);
  text.setAttribute("stroke", "black");
  text.setAttribute("font-size", 15);

  return text;
};

//group constructor
export const getGroup = () => {
  const group = document.createElementNS(svgNS, "g");
  return group;
};

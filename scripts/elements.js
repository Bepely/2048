//This script is about creating and handling elements.
let bodyWidth = 0;
let bodyHeight = 0;

//creating an svg element
export const setSvg = () => {
  const svgns = "http://www.w3.org/2000/svg";
  let svg = document.createElementNS(svgns, "svg");
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "100%");
  document.querySelector(".display").appendChild(svg);

  bodyWidth = svg.clientWidth;
  bodyHeight = svg.clientHeight;

  return { svg, bodyWidth, bodyHeight };
};

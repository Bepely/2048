//This script is about Block object on a grid
const colorPalette = {
  0: "#ede3d8",
  2: "#ece3da",
  4: "#eee0d3",
  8: "#e7b485",
  16: "#e49e72",
  32: "#e18368",
  64: "#e46a52",
  128: "#ebd799",
  256: "#e7d58d",
  512: "#f2d56f",
  1024: "#ebce79",
  2048: "#e4c549",
};

export const colorBlock = (block, value) => {
  block.setAttribute("fill", colorPalette[value]);
};

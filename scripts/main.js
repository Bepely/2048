//This script is about starting the whole process of the game

import { setSvg } from "./elements";
import { setMatrix } from "./mechanics/matrix";
import { movement } from "./mechanics/movement";
import { setDisplay } from "./apperance/mainDisplay";
import { setGameDisplay } from "./apperance/gameDisplay";

import "../styles/main.css";

//init svg element
setSvg();

//init matrix of a game
setMatrix();

//init main display
setDisplay();

//init game display
setGameDisplay();

//movement controller
movement();

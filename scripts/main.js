//This script is about starting the whole process of the game

import { setSvg } from "./elements";
import { setMatrix } from "./mechanics/matrix";
import { movement } from "./mechanics/movement";



import "../styles/main.css";

setSvg();
setMatrix()
movement();

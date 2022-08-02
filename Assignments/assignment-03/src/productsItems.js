import airTagSingle from "./images/airtag-single.jpeg";
import cheekyWink from "./images/Belkin-Secure-Holder-Key-Ring-AirTag .jpeg";
import cowboy from "./images/Belkin-Secure-Holder-Strap-AirTag.jpeg";
import friendlySmile from "./images/AirTag-Leather-Loop- Saddle.jpeg";
import happy from "./images/AirTag-Leather-Key-Ring–Wisteria.jpeg";
import joker from "./images/AirTag-Hermes-Key Ring.jpeg";
/* import loveBlush from "./images/love-blush.png";
import think from "./images/think.png"; */
import { v4 as uuidv4 } from "uuid";

export const products = [
  {
    id: uuidv4(),
    name: "Airtag Single",
    description: "Personalise your AirTag with free engraving. Only at Apple.",
    imgSrc: airTagSingle,
    imgAlt: "blessed",
    price: "$70.30",
  },
  {
    id: uuidv4(),
    name: "Cheeky Wink",
    description: "Download in line style",
    imgSrc: cheekyWink,
    imgAlt: "cheeky-wink",
    price: "$70.30",
  },
  {
    id: uuidv4(),
    name: "Cowboy",
    description: "Download in line style",
    imgSrc: cowboy,
    imgAlt: "cowboy",
    price: "$70.30",
  },
  {
    id: uuidv4(),
    name: "Friendly Smile",
    description: "Smileys icon, emoticon icon",
    imgSrc: friendlySmile,
    imgAlt: "friendly-smile",
    price: "$21.20",
  },
  {
    id: uuidv4(),
    name: "Happy",
    description: "Cartoon clip art",
    imgSrc: happy,
    imgAlt: "happy",
    price: "$70.30",
  },
  {
    id: uuidv4(),
    name: "Joker",
    description: "PNG format",
    imgSrc: joker,
    imgAlt: "joker",
    price: "$21.20",
  },
  /* {
    id: uuidv4(),
    name: "Love Blush",
    description: "Cartoon clip art",
    imgSrc: loveBlush,
    imgAlt: "love-blush",
    price: "$21.20",
  },
  {
    id: uuidv4(),
    name: "Think",
    description: "Download in line style",
    imgSrc: think,
    imgAlt: "think",
    price: "$21.20",
  }, */
];

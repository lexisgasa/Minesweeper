import { generateRandomBoolean } from "../utils/utils.js";
import { Cell } from "./types";

export const createCell = (): Cell => {
  return {
    hasMine: generateRandomBoolean(),
    minesAround: 0,
  };
};

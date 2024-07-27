import { createCell } from "../cell/cell.js";
import { Board } from "./types";

export const createSquareBoard = (dimension: number): Board => {
  const squareBoard: Board = {
    cells: [],
  };

  for (let row = 0; row < dimension; row++) {
    squareBoard.cells.push([]);

    for (let column = 0; column < dimension; column++) {
      squareBoard.cells[row].push(createCell());
    }
  }

  return squareBoard;
};

createSquareBoard(4);

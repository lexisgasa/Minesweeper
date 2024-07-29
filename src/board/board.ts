import { createCell } from "../cell/cell.js";
import { countMinesAround } from "../countMines.js";
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

const board = createSquareBoard(3);
debugger;

console.log(countMinesAround(board, 1, 1));

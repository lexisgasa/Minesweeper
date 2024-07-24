import { Board } from "./types";

const createSquareBoard = (dimension: number): Board => {
  const squareBoard: Board = {
    cells: [],
  };

  const generateMine = (): boolean => {
    const randomNumber = Math.random();

    return randomNumber >= 0.5;
  };

  for (let row = 0; row < dimension; row++) {
    squareBoard.cells.push([]);
    for (let column = 0; column < dimension; column++) {
      squareBoard.cells[row].push({
        hasMine: generateMine(),
        minesAround: 0,
      });
    }
  }

  return squareBoard;
};

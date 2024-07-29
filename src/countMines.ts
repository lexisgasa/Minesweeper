import { Board } from "./board/types";

export const countMinesAround = (
  board: Board,
  rowPosition: number,
  columnPosition: number
): number => {
  let minesAround = 0;

  for (
    let cellRowPosition = rowPosition - 1;
    cellRowPosition <= rowPosition + 1;
    cellRowPosition++
  ) {
    const doesRowExist =
      cellRowPosition >= 0 || cellRowPosition < board.cells.length;

    if (!doesRowExist) {
      continue;
    }

    for (
      let cellColumnPosition = columnPosition - 1;
      cellColumnPosition <= columnPosition + 1;
      cellColumnPosition++
    ) {
      const doesColumnExist =
        cellColumnPosition >= 0 || cellColumnPosition < board.cells.length;

      const isSelfCell =
        cellRowPosition === rowPosition &&
        cellColumnPosition === columnPosition;

      if (isSelfCell || !doesColumnExist) {
        continue;
      }

      if (board.cells[cellRowPosition][cellColumnPosition].hasMine) {
        minesAround++;
      }
    }
  }

  return minesAround;
};

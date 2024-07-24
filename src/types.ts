type Cell = {
  hasMine: boolean;
  minesAround: number;
};

export type Board = {
  cells: Cell[][];
};

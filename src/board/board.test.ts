import { createSquareBoard } from "./board";

describe("Given the createSquareBoard function", () => {
  describe("When it receives 3", () => {
    test("Then it should return an array with 3 elements", () => {
      const dimension = 3;
      const expectedBoardDimension = 3;

      const boardDimension = createSquareBoard(dimension).cells.length;

      expect(boardDimension).toBe(expectedBoardDimension);
    });
  });
});

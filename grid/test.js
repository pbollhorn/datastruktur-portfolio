import assert from "assert";
import Grid from "./grid.js";

describe("Grid", function () {
  const rows = 5;
  const cols = 3;
  let grid = new Grid(rows, cols);

  this.beforeEach(function () {
    // Use this grid for each test:
    //       col1 col2 col3
    // row0   A    B    C
    // row1   D    E    F
    // row2   G    H    I
    // row3   J    K    L
    // row4   M    N    O
    grid = new Grid(rows, cols);
    grid.set({ row: 0, col: 0 }, "A");
    grid.set({ row: 0, col: 1 }, "B");
    grid.set({ row: 0, col: 2 }, "C");
    grid.set({ row: 1, col: 0 }, "D");
    grid.set({ row: 1, col: 1 }, "E");
    grid.set({ row: 1, col: 2 }, "F");
    grid.set({ row: 2, col: 0 }, "G");
    grid.set({ row: 2, col: 1 }, "H");
    grid.set({ row: 2, col: 2 }, "I");
    grid.set({ row: 3, col: 0 }, "J");
    grid.set({ row: 3, col: 1 }, "K");
    grid.set({ row: 3, col: 2 }, "L");
    grid.set({ row: 4, col: 0 }, "M");
    grid.set({ row: 4, col: 1 }, "N");
    grid.set({ row: 4, col: 2 }, "O");
  });

  describe("Getting data", function () {
    it("Testing rows()", function () {
      assert.equal(grid.rows(), 5);
    });
    it("Testing cols()", function () {
      assert.equal(grid.cols(), 3);
    });
    it("Testing size()", function () {
      assert.equal(grid.size(), 15);
    });
    it("Testing get({ row, col })", function () {
      assert.equal(grid.get({ row: 0, col: 0 }), "A");
      assert.equal(grid.get({ row: 2, col: 1 }), "H");
      assert.equal(grid.get({ row: 4, col: 2 }), "O");
      assert.equal(grid.get({ row: -1, col: 0 }), undefined);
      assert.equal(grid.get({ row: rows, col: 0 }), undefined);
      assert.equal(grid.get({ row: 0, col: -1 }), undefined);
      assert.equal(grid.get({ row: 0, col: cols }), undefined);
    });
    it("Testing indexFor({ row, col })", function () {
      assert.equal(grid.indexFor({ row: 2, col: 1 }), 7);
      assert.equal(grid.indexFor({ row: 4, col: 2 }), 14);
    });
    it("Testing rowColFor( index )", function () {
      assert.deepStrictEqual(grid.rowColFor(7), { row: 2, col: 1 });
      assert.deepStrictEqual(grid.rowColFor(14), { row: 4, col: 2 });
    });
    it("Testing north({ row, col })", function () {
      assert.deepStrictEqual(grid.north({ row: 2, col: 1 }), {
        row: 1,
        col: 1,
        value: "E",
      });
      assert.equal(grid.north({ row: 0, col: 1 }), undefined);
    });
    it("Testing south({ row, col })", function () {
      assert.equal(grid.south({ row: 2, col: 1 }), "K");
      assert.equal(grid.south({ row: 4, col: 1 }), undefined);
    });
    it("Testing west({ row, col })", function () {
      assert.equal(grid.west({ row: 2, col: 1 }), "G");
      assert.equal(grid.west({ row: 2, col: 0 }), undefined);
    });
    it("Testing east({ row, col })", function () {
      assert.equal(grid.east({ row: 2, col: 1 }), "I");
      assert.equal(grid.east({ row: 2, col: 2 }), undefined);
    });
  });
});

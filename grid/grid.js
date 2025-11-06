export default class Grid {
  #array; // Underlying 1D array
  #rows; // Number of rows in the grids
  #cols; // Number of columns in the grid

  constructor(rows, cols) {
    this.#array = [];
    this.#rows = rows;
    this.#cols = cols;
    const length = rows * cols;
    for (let i = 0; i < length; i++) {
      this.#array[i] = undefined;
    }
  }

  printArray() {
    for (let i = 0; i < this.#array.length; i++) {
      console.log(this.#array[i]);
    }
  }

  get({ row, col }) {
    const index = row * this.#cols + col;
  }
}

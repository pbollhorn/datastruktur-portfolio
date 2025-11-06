export default class Grid {
  #array; // Underlying 1D array
  #rows; // Number of rows in the grid
  #cols; // Number of columns in the grid

  constructor(rows, cols) {
    this.#array = [];
    this.#rows = rows;
    this.#cols = cols;
    const length = rows * cols;
    for (let i = 0; i < length; i++) {
      this.#array[i] = undefined;
    }
    this.#array = [17, 36, 99, 88, 45, 3, 16, 27, 26, 5, 0, 99, 42, 43, 18];
  }

  printArray() {
    for (let i = 0; i < this.#array.length; i++) {
      console.log(this.#array[i]);
    }
  }

  printGrid(cellWidth = 3) {
    let output = "";
    for (let row = 0; row < this.#rows; row++) {
      for (let col = 0; col < this.#cols; col++) {
        const cell = String(this.get({ row, col }));
        const cellWithFixedWidth = cell
          .slice(0, cellWidth)
          .padEnd(cellWidth, " ");
        output += `${cellWithFixedWidth} `;
      }
      output += "\n";
    }
    console.log(output);
  }

  get({ row, col }) {
    const index = row * this.#cols + col;
    return this.#array[index];
  }
}

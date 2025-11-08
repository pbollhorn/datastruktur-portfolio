export default class Grid {
  #array; // Underlying 1D array
  #rows; // Number of rows in the grid
  #cols; // Number of columns in the grid

  constructor(rows, cols) {
    if (rows < 1 || cols < 1) {
      throw new Error("rows and cols must both be >= 1");
    }

    this.#array = [];
    this.#rows = rows;
    this.#cols = cols;
    const length = rows * cols;
    for (let i = 0; i < length; i++) {
      this.#array[i] = undefined;
    }
    this.#array = [17, 36, 99, 88, 45, 3, 16, 27, 26, 5, 0, 99, 42, 43, 18];
  }

  // // Modern iterator definition (2025 style) which yields the values in grid cells
  // *[Symbol.iterator]() {
  //   let node = this.head;
  //   while (node != null) {
  //     yield node;
  //     node = node.next;
  //   }
  // }

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
    if (row < 0 || row >= this.#rows || col < 0 || col >= this.#cols) {
      return undefined;
    }
    const index = this.indexFor({ row, col });
    return this.#array[index];
  }

  set({ row, col }, value) {
    const index = this.indexFor({ row, col });
    this.#array[index] = value;
  }

  indexFor({ row, col }) {
    return row * this.#cols + col;
  }

  rowColFor(index) {
    const row = Math.floor(index / this.#cols);
    const col = index % this.#cols;
    return { row, col };
  }

  north({ row, col }) {
    const value = this.get({ row: row - 1, col });
    return value;
  }
}

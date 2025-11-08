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
    for (let i = 0; i < rows * cols; i++) {
      this.#array[i] = null;
    }
  }

  fill(value) {
    for (let i = 0; i < this.#rows * this.#cols; i++) {
      this.#array[i] = value;
    }
  }

  rows() {
    return this.#rows;
  }

  cols() {
    return this.#cols;
  }

  size() {
    return this.#array.length;
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
    const prevRow = row - 1;
    console.log(prevRow);
    const value = this.get({ prevRow, col });
    console.log(value);
    if (value === undefined) return undefined;
    return { row: prevRow, col: col, value: value };
  }

  south({ row, col }) {
    const value = this.get({ row: row + 1, col });
    return value;
  }

  west({ row, col }) {
    const value = this.get({ row: row, col: col - 1 });
    return value;
  }

  east({ row, col }) {
    const value = this.get({ row: row, col: col + 1 });
    return value;
  }

  nextInRow({ row, col }) {
    nextRow = row + 1;
    value = get({ nextRow, col });

    return { row: nextRow, col: col, value };
  }
}

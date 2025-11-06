export default class Grid {
  constructor(rows, cols) {
    const size = rows * cols;
    this.array = [];
    for (let i = 0; i < size; i++) {
      this.array[i] = undefined;
    }
  }
}

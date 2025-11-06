export default class Grid {
  consctructor(rows, cols) {
    const size = rows * cols;
    for (let i = 0; i < size; i++) {
      this.array[i] = undefined;
    }
  }
}

export default class Grid {

  #array;

  constructor(rows, cols) {
    this.#array = [];
    for (let i = 0; i < rows * cols; i++) {
      this.#array[i] = undefined;
    }
  }

  printArray() {
    for (let i = 0; i < this.#array.length; i++) {
      console.log(this.#array[i]);
    }
  }
}

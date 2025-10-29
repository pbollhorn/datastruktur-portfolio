import StaticArray from "./StaticArray.js";

export class DynamicArray {
  #staticArray;
  #size;

  constructor(initialCapacity = 10) {
    this.#staticArray = new StaticArray(initialCapacity);
    this.#size = 0;
  }

  size() {
    return this.#size;
  }

  capacity() {
    return this.#staticArray.length;
  }
}

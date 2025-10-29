import StaticArray from "./StaticArray.js";

export default class DynamicArray {
  #staticArray;
  #size;

  constructor(capacity = 10) {
    this.#staticArray = new StaticArray(capacity);
    this.#size = 0;
  }

  add(item) {
    this.#size++;
    this.#staticArray.set(this.#size - 1, item);
  }

  get(index) {
    return this.#staticArray.get(index);
  }

  set(index, item) {
    this.#staticArray.set(index, item);
  }

  size() {
    return this.#size;
  }

  capacity() {
    return this.#staticArray.length;
  }
}

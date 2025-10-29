import StaticArray from "../staticarray/StaticArray.js";

export default class DynamicArray {
  #staticArray;
  #size;

  constructor(capacity = 3) {
    this.#staticArray = new StaticArray(capacity);
    this.#size = 0;
  }

  add(item) {
    if (this.#size == this.capacity()) {
      this.grow();
    }
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

  grow() {
    const oldStaticArray = this.#staticArray;
    this.#staticArray = new StaticArray(2 * oldStaticArray.length);
    for (i = 0; i < oldStaticArray.length; i++) {
      this.#staticArray.set(i, oldStaticArray.get(i));
    }
  }
}

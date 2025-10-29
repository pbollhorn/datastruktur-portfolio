import StaticArray from "../staticarray/StaticArray.js";

export default class DynamicArray {
  #staticArray;
  #size;

  constructor(capacity = 10) {
    this.#staticArray = new StaticArray(capacity);
    this.#size = 0;
  }

  add(item) {
    // console.log("this.#size: " + this.#size);
    // console.log("this.capacity(): " + this.capacity());
    if (this.#size == this.capacity()) {
      this.grow();
    }
    this.#staticArray.set(this.#size, item);
    this.#size++;
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
    for (let i = 0; i < oldStaticArray.length; i++) {
      this.#staticArray.set(i, oldStaticArray.get(i));
    }
  }

  clear() {
    this.#size = 0;
  }
}

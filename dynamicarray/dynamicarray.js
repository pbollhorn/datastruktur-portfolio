import StaticArray from "../staticarray/StaticArray.js";

export default class DynamicArray {
  #staticArray;
  #size;

  constructor(capacity = 10) {
    if (capacity < 1) {
      throw new Error("capacity must be >= 1");
    }

    this.#staticArray = new StaticArray(capacity);
    this.#size = 0;
  }

  capacity() {
    return this.#staticArray.length;
  }

  size() {
    return this.#size;
  }

  clear() {
    this.#size = 0;
  }

  get(index) {
    if (index >= this.#size || index < 0) {
      throw new RangeError("index out of bounds");
    }
    return this.#staticArray.get(index);
  }

  set(index, item) {
    if (index >= this.#size || index < 0) {
      throw new RangeError("index out of bounds");
    }

    this.#staticArray.set(index, item);
  }

  add(item) {
    if (this.#size == this.capacity()) {
      this.grow();
    }
    this.#size++;
    this.set(this.#size - 1, item);
  }

  grow() {
    const oldStaticArray = this.#staticArray;
    this.#staticArray = new StaticArray(2 * oldStaticArray.length);
    for (let i = 0; i < oldStaticArray.length; i++) {
      this.set(i, oldStaticArray.get(i));
    }
  }

  // TODO: insert method seems to be the last one failing in test.js
  insert(index, item) {
    if (index > this.#size || index < 0) {
      throw new RangeError("index out of bounds");
    }

    this.#size++;

    // if (index == this.capacity()) {
    //   this.grow();
    // }

    if (this.#size == this.capacity()) {
      this.grow();
    }

    for (let i = this.#size; i > index; i--) {
      this.set(i, this.get(i - 1));
    }

    this.set(index, item);
  }

  remove(index) {
    if (index >= this.#size || index < 0) {
      throw new RangeError("index out of bounds");
    }

    for (let i = index; i < this.#size - 1; i++) {
      this.set(i, this.get(i + 1));
    }
    this.#size--;
  }

  print() {
    console.log(`size: ${this.#size}`);
    console.log(`capacity: ${this.capacity()}`);
    for (let i = 0; i < this.#size; i++) {
      console.log(`${i}: ${this.get(i)}`);
    }
    console.log();
  }
}

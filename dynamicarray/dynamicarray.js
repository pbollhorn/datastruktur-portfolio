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

  size() {
    return this.#size;
  }

  capacity() {
    return this.#staticArray.length;
  }

  get(index) {
    if (index >= this.#size || index < 0) {
      throw new RangeError("index out of bounds");
    }
    return this.#staticArray.get(index);
  }

  set(index, item) {
    // if (index > this.#size) {
    //   throw new RangeError();
    // }
    // if(index==this.#size){
    //   this.grow();
    //   this.#size++;
    // }

    this.#staticArray.set(index, item);
  }

  add(item) {
    if (this.#size == this.capacity()) {
      this.grow();
    }
    this.set(this.#size, item);
    this.#size++;
  }

  grow() {
    const oldStaticArray = this.#staticArray;
    this.#staticArray = new StaticArray(2 * oldStaticArray.length);
    for (let i = 0; i < oldStaticArray.length; i++) {
      this.set(i, oldStaticArray.get(i));
    }
  }

  insert(index, item) {
    if (index > this.#size || index < 0) {
      throw new RangeError("index out of bounds");
    }

    if (this.#size == this.capacity()) {
      this.grow();
    }

    for (let i = this.#size; i > index; i--) {
      this.set(i, this.get(i - 1));
    }

    this.set(index, item);

    this.#size++;
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

  clear() {
    this.#size = 0;
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

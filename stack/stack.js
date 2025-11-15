export default class Stack {
  #head;
  #size;

  constructor() {
    this.clear();
  }

  clear() {
    this.#head = null;
    this.#size = 0;
  }

  // Iterator that yields each data element in the stack
  *[Symbol.iterator]() {
    let node = this.#head;
    while (node !== null) {
      yield node.data;
      node = node.next;
    }
  }

  size() {
    return this.#size;
  }

  peek() {
    if (this.#head === null) return undefined;
    return this.#head.data;
  }

  get(index) {
    let i = 0;
    for (const data of this) {
      if (i === index) return data;
      i++;
    }
  }

  push(data) {
    if (this.#head === null) {
      const newNode = { next: null, data: data };
      this.#head = newNode;
    } else {
      const newNode = { next: this.#head.next, data: data };
      this.#head = newNode;
    }
    this.#size++;
  }

  // enqueue(data) {
  //   const newNode = { next: null, data: data };
  //   const lastNode = this.#tail;
  //   if (lastNode === null) {
  //     this.#head = newNode;
  //     this.#tail = newNode;
  //   } else {
  //     lastNode.next = newNode;
  //     this.#tail = newNode;
  //   }
  //   this.#size++;
  // }

  pop() {
    const firstNode = this.#head;
    if (firstNode === null) return undefined;
    this.#head = firstNode.next;
    this.#size--;
    return firstNode.data;
  }

  printStack() {
    let i = 0;
    for (const data of this) {
      console.log(`Position ${i}: ${data}`);
      i++;
    }
    console.log(`size=${i}\n`);
  }
}

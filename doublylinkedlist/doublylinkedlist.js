export default class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Modern iterator definition (2025 style) which yields the nodes
  *[Symbol.iterator]() {
    let node = this.head;
    while (node != null) {
      yield node;
      node = node.next;
    }
  }

  size() {
    let i = 0;
    for (const node of this) {
      i++;
    }
    return i;
  }

  clear() {
    this.head = null;
    this.tail = null;
  }

  addLast(data) {
    const lastNode = this.getLastNode();
    const newNode = { data: data, prev: lastNode, next: null };
    if (lastNode !== null) {
      lastNode.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
  }

  addFirst(data) {
    const firstNode = this.getFirstNode();
    const newNode = { data: data, prev: null, next: firstNode };
    if (firstNode !== null) {
      firstNode.prev = newNode;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
  }

  getNextNode(node) {
    return node.next;
  }

  getPreviousNode(node) {
    return node.prev;
  }

  getNode(index) {
    let i = 0;
    for (const node of this) {
      if (i === index) return node;
      i++;
    }
  }

  getFirstNode() {
    return this.head;
  }

  getLastNode() {
    return this.tail;
  }

  getFirst() {
    const firstNode = this.getFirstNode();
    return firstNode.data;
  }

  getLast() {
    const lastNode = this.getLastNode();
    return lastNode.data;
  }

  get(index) {
    return this.getNode(index).data;
  }

  printList() {
    let i = 0;
    for (const node of this) {
      console.log(`Node ${i}: ${node.data}`);
      i++;
    }
    console.log(`size=${i}\n`);
  }

  set(index, data) {
    const node = this.getNode(index);
    node.data = data;
  }

  insertBeforeNode(node, data) {
    const newNode = { data: data, prev: node.prev, next: node };
    if (node.prev !== null) {
      node.prev.next = newNode;
      node.prev = newNode;
    } else {
      this.head = newNode;
      node.prev = newNode;
    }
  }
}

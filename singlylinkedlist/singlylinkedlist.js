export default class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  clear() {
    this.head = null;
  }

  getFirstNode() {
    return this.head;
  }

  getNextNode(node) {
    if (node == null || node.next == null) return null;
    else return node.next;
  }

  getLastNode() {
    let node = this.head;
    if (node == null) return null;
    while (node.next != null) {
      node = node.next;
    }
    return node;
  }

  // TODO: What to do in case of no nodes?
  getFirst() {
    if (this.head == null) return undefined;
    return this.head.data;
  }

  getLast() {
    const lastNode = this.getLastNode();
    if (lastNode == null) return undefined;
    return lastNode.data;
  }

  set(index, data) {
    const node = this.getNode(index);
    node.data = data;
  }

  insertBefore(node, data) {
    const previousNode = this.getPreviousNode(node);
    const newNode = { next: node, data: data };

    if (previousNode == null) {
      this.head = newNode;
    } else {
      previousNode.next = newNode;
    }
  }

  insertAfter(node, data) {
    const newNode = { next: node.next, data: data };
    node.next = newNode;
  }

  getNode(index) {
    let i = 0;
    let node = this.head;
    while (node != null && i != index) {
      node = this.getNextNode(node);
      i++;
    }
    return node;
  }

  getPreviousNode(node) {
    let otherNode = this.head;
    while (otherNode != null && otherNode.next != node) {
      otherNode = this.getNextNode(otherNode);
    }
    return otherNode;
  }

  // removeNode(node) {
  //   const previousNode = this.getPreviousNode(node);
  //   if (previousNode == this.head) {

  //   }

  //   if (previousNode != null) {
  //     previousNode.next = node.next;
  //   }
  // }

  get(index) {
    const node = this.getNode(index);
    if (node == null) return undefined;
    return node.data;
  }

  add(data) {
    let newNode = { next: null, data: data };
    const lastNode = this.getLastNode();
    if (lastNode == null) this.head = newNode;
    else lastNode.next = newNode;
  }

  size() {
    let n = 0;
    for (let node = this.head; node != null; node = this.getNextNode(node)) {
      n++;
    }
    return n;
  }

  printList() {
    let n = 0;
    for (let node = this.head; node != null; node = this.getNextNode(node)) {
      console.log(`Node ${n}: ${node.data}`);
      n++;
    }
    console.log(`size=${n}\n`);
  }
}

// class Node {
//   constructor(next) {
//     this.next = next;
//   }

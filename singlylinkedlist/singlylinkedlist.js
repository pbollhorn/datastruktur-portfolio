export default class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  clear() {
    this.head = null;
  }

  size() {
    let i = 0;
    let node = this.head;
    while (node != null) {
      i++;
      node = this.getNextNode(node);
    }
    return i;
  }

  printList() {
    let i = 0;
    let node = this.head;
    while (node != null) {
      console.log(`Node ${i}: ${node.data}`);
      i++;
      node = this.getNextNode(node);
    }
    console.log(`size=${i}\n`);
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

  getFirstNode() {
    return this.head;
  }

  getLastNode() {
    let node = this.head;
    if (node == null) return null;
    while (node.next != null) {
      node = node.next;
    }
    return node;
  }

  getNextNode(node) {
    return node.next;
  }

  getPreviousNode(node) {
    let otherNode = this.head;
    while (otherNode != null && otherNode.next != node) {
      otherNode = this.getNextNode(otherNode);
    }
    return otherNode;
  }

  removeNode(node) {
    const previousNode = this.getPreviousNode(node);
    if (previousNode == null) {
      this.head = node.next;
    } else {
      previousNode.next = node.next;
    }
  }

  get(index) {
    const node = this.getNode(index);
    if (node == null) return undefined;
    return node.data;
  }

  getFirst() {
    if (this.head == null) return undefined;
    return this.head.data;
  }

  getLast() {
    const lastNode = this.getLastNode();
    // if (lastNode == null) return undefined;
    return lastNode.data;
  }

  set(index, data) {
    const node = this.getNode(index);
    node.data = data;
  }

  add(data) {
    let newNode = { next: null, data: data };
    const lastNode = this.getLastNode();
    if (lastNode == null) this.head = newNode;
    else lastNode.next = newNode;
  }

  insert(index, data) {
    const node = this.getNode(index);
    this.insertBefore(node, data);
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

  remove(index) {
    const node = this.getNode(index);
    this.removeNode(node);
    return node.data;
  }

  removeFirst() {
    return this.remove(0);
  }

  removeLast() {
    const lastNode = this.getLastNode();
    this.removeNode(lastNode);
    return lastNode.data;
  }
}

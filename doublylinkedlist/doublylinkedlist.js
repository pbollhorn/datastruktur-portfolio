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

  hardCodeDataIntoList() {
    this.addLast("I");
    this.addLast("dag");
    this.addLast("er");
    this.addLast("første");
  }

  hardCodeHarder() {
    const Node0 = new Node("Hej", null, null);
    const Node1 = new Node("med", null, null);
    const Node2 = new Node("dig.", null, null);
    const Node3 = new Node("Jeg", null, null);
    const Node4 = new Node("hedder", null, null);
    const Node5 = new Node("Kaj.", null, null);
    this.head = Node0;
    this.tail = Node5;
    Node0.next = Node1;
    Node1.prev = Node0;
    Node1.next = Node2;
    Node2.prev = Node1;
    Node2.next = Node3;
    Node3.prev = Node2;
    Node3.next = Node4;
    Node4.prev = Node3;
    Node4.next = Node5;
    Node5.prev = Node4;
  }

  addLast(data) {
    const lastNode = this.getLastNode();
    const newNode = new Node(data, lastNode, null);
    lastNode.next = newNode;
    this.tail = newNode;
  
    // if (this.tail === null) {
    //   this.tail = newNode;
    //   this.head = newNode;
    // } else {

    // }

    // if (this.head === null) {
    //   this.head = newNode;
    // }
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

  size() {
    let i = 0;
    for (const node of this) {
      i++;
    }
    return i;
  }
}

// Helper class
class Node {
  constructor(data, prev, next) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

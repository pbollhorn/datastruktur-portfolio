export default class SinglyLinkedList {
  constructor() {
    this.head = null;
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
    if (node == null || node.next == null) return null;
    else return node.next;
  }

  add(data) {
    let newNode = { next: null, data: data };
    const lastNode = this.getLastNode();
    if (lastNode == null) this.head = newNode;
    else lastNode.next = newNode;
  }

  printList() {
    for (
      let node = this.head;
      node != null;
      node = this.getNextNode(node)
    ) {
      console.log(node.data);
    }
  }
}

// class Node {
//   constructor(next) {
//     this.next = next;
//   }

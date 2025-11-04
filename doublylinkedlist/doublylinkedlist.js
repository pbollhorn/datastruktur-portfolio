export default class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  hardCodeDataIntoList() {
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

  printList() {
    let i = 0;
    let node = this.head;
    while (node != null) {
      console.log(`Node ${i}: ${node.data}`);
      i++;
      node = node.next;
    }
    console.log(`size=${i}\n`);
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

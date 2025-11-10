export default class Queue {
  #head;
  #tail;

  constructor() {
    this.clear();
  }

  clear() {
    this.#head = null;
    this.#tail = null;
  }

  // Iterator that yields each data element in the queue
  *[Symbol.iterator]() {
    let node = this.#head;
    while (node !== null) {
      yield node.data;
      node = node.next;
    }
  }

//   size() {
//     return this.#size;
//   }

  peek() {
    if (this.#head === null) return undefined;
    return this.#head.data;
  }

  enqueue(data) {
    const newNode = { next: null, data: data };
    const lastNode = this.#tail;
    if (lastNode === null) {
      this.#head = newNode;
      this.#tail = newNode;
    } else {
      lastNode.next = newNode;
      this.#tail = newNode;
    }
  }

  dequeue() {
    const firstNode = this.#head;
    if (firstNode === null) return undefined;
    this.#head = firstNode.next;
    return firstNode.data;
  }

  printQueue() {
    let i = 0;
    for (const node of this) {
      console.log(`Position ${i}: ${node.data}`);
      i++;
    }
    console.log(`size=${i}\n`);
  }

  //   getFirstNode() {
  //     return this.head;
  //   }

  //   getLastNode() {
  //     let node = this.head;
  //     if (node == null) return null;
  //     while (node.next != null) {
  //       node = node.next;
  //     }
  //     return node;
  //   }

  //   getNextNode(node) {
  //     return node.next;
  //   }

  //   getPreviousNode(node) {
  //     let _node = this.head;
  //     while (_node != null && _node.next != node) {
  //       _node = this.getNextNode(_node);
  //     }
  //     return _node;
  //   }

  //   removeNode(node) {
  //     const previousNode = this.getPreviousNode(node);
  //     if (previousNode == null) {
  //       this.head = node.next;
  //     } else {
  //       previousNode.next = node.next;
  //     }
  //   }

  //   get(index) {
  //     const node = this.getNode(index);
  //     if (node == null) return undefined;
  //     return node.data;
  //   }

  //   getFirst() {
  //     if (this.head == null) return undefined;
  //     return this.head.data;
  //   }

  //   getLast() {
  //     const lastNode = this.getLastNode();
  //     if (lastNode == null) return undefined;
  //     return lastNode.data;
  //   }

  //   set(index, data) {
  //     const node = this.getNode(index);
  //     node.data = data;
  //   }

  //   add(data) {
  //     let newNode = { next: null, data: data };
  //     const lastNode = this.getLastNode();
  //     if (lastNode == null) this.head = newNode;
  //     else lastNode.next = newNode;
  //   }

  //   insert(index, data) {
  //     const node = this.getNode(index);
  //     this.insertBefore(node, data);
  //   }

  //   insertBefore(node, data) {
  //     const previousNode = this.getPreviousNode(node);
  //     const newNode = { next: node, data: data };
  //     if (previousNode == null) {
  //       this.head = newNode;
  //     } else {
  //       previousNode.next = newNode;
  //     }
  //   }

  //   insertAfter(node, data) {
  //     const newNode = { next: node.next, data: data };
  //     node.next = newNode;
  //   }

  //   remove(index) {
  //     const node = this.getNode(index);
  //     this.removeNode(node);
  //     return node.data;
  //   }

  //   removeFirst() {
  //     return this.remove(0);
  //   }

  //   removeLast() {
  //     const lastNode = this.getLastNode();
  //     this.removeNode(lastNode);
  //     return lastNode.data;
  //   }
}

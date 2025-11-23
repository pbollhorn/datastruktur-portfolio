import Queue from "../queue/queue.js";
import Stack from "../stack/stack.js";

export default class Tree {
  constructor() {
    this.root = null;
  }

  // udskriver hele træet i consollen.
  dump() {}

  // opretter en ny node med den givne value, og tilføjer den et sted i træet - du bestemmer selv hvor!
  addValue(value) {}

  // leder efter den givne value i træet, og returnerer den (første) Node der har den
  findValue(value) {}

  removeValue(value) {}

  // Looks for value using BFS and returns first node that has that value
  breadthFirstSearch(value) {
    const queue = new Queue();
    queue.enqueue(this.root);

    while (queue.size() > 0) {
      const currentNode = queue.dequeue();
      if (currentNode.value === value) {
        return currentNode;
      } else {
        for (const node of currentNode.childNodes) {
          queue.enqueue(node);
        }
      }
    }

    // return null in case value is not found in any node
    return null;
  }

  depthFirstSearch(value) {
    const stack = new Stack();
  }
}

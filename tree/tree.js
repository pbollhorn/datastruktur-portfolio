import Queue from "../queue/queue.js";
// import Stack from "../stack/stack.js";

export default class Tree {
  constructor(node) {
    this.root = node;
  }

  // Iterator that yields each node in the tree using BFS
  *[Symbol.iterator]() {
    const queue = new Queue();
    queue.enqueue(this.root);

    while (queue.size() > 0) {
      const currentNode = queue.dequeue();
      console.log(currentNode);
      yield currentNode;

      for (const node of currentNode.childNodes) {
        queue.enqueue(node);
      }
    }
  }

  // udskriver hele træet i consollen.
  dump() {
    for (const node of this) {
      console.log("i'm in the loop");
    }
  }

  // opretter en ny node med den givne value, og tilføjer den et sted i træet - du bestemmer selv hvor!
  addValue(value) {}

  // leder efter den givne value i træet, og returnerer den (første) Node der har den
  // alias for bfs method
  findValue(value) {
    return bfs(value);
  }

  removeValue(value) {}

  // Looks for value using Breadth First Search and returns first node that has that value
  bfs(value) {
    for (const node of this) {
      if (node.value === value) {
        return node;
      }
    }

    // return null in case value is not found in any node
    return null;
  }

  // // Looks for value using Depth First Search and returns first node that has that value
  // dfs(value) {
  //   const stack = new Stack();
  // }
}

export default class Tree {
  constructor(node) {
    this.root = node;
  }

  // Iterator that yields each node in the tree using BFS
  *[Symbol.iterator]() {
    const queue = []; // using JavaScript array as a queue, because my own Queue class has a bug
    queue.push(this.root);

    while (queue.length > 0) {
      const currentNode = queue.shift();
      console.log(currentNode);
      yield currentNode;

      for (const node of currentNode.childNodes) {
        queue.push(node);
      }
    }
  }

  // udskriver hele træet i consollen.
  dump() {
    for (const node of this) {
      console.log("i'm in the loop");
    }
    // console.log(this.root);
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

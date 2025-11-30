export default class Tree {
  constructor(node) {
    this.root = node;
  }

  // Iterator that yields each node in the tree using BFS (Breadth First Search)
  *[Symbol.iterator]() {
    const queue = []; // using JavaScript array as a queue
    queue.push(this.root);

    while (queue.length > 0) {
      const currentNode = queue.shift();
      yield currentNode;

      for (const node of currentNode.childNodes) {
        queue.push(node);
      }
    }
  }

  // Looks for value using BFS and returns first node that has that value
  findValue(value) {
    for (const node of this) {
      if (node.value === value) {
        return node;
      }
    }

    // return null in case value is not found in any node
    return null;
  }

  // TODO: This method prints the tree as a list. It would be better if the tree was printed as a tree.
  printTree() {
    for (const node of this) {
      console.log(node.value);
    }
  }

  // TODO: This method is not implemented yet
  addValue(value) {}

  // TODO: This method is not implemented yet
  removeValue(value) {}
}

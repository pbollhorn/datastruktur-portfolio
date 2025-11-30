import Tree from "./tree.js";
import Node from "./node_.js";

const nodeA = new Node("A");
const nodeB = new Node("B");
const nodeC = new Node("C");
const nodeD = new Node("D");
const nodeE = new Node("E");
const nodeF = new Node("F");

const tree = new Tree(nodeA);
nodeA.appendChild(nodeB);
nodeA.appendChild(nodeC);
nodeB.appendChild(nodeD);

console.log(tree.findValue("D"));
console.log(tree.findValue("Value not in tree"));

console.log("\nPrint tree as a list:");
tree.printTree();

// const node1 = new Node("node1");

// console.log(node1.firstChild());
// console.log(node1.lastChild());
// console.log(node1.hasChildNodes());

// const node2 = new Node("node2");
// node1.appendChild(node2);
// console.log(node1.firstChild());
// console.log(node1.lastChild());
// console.log(node1.hasChildNodes());

import Node from "./node.js";


const node1 = new Node("node1");

console.log(node1.firstChild());
console.log(node1.lastChild());
console.log(node1.hasChildNodes());

const node2 = new Node("node2");
node1.appendChild(node2);
console.log(node1.firstChild());
console.log(node1.lastChild());
console.log(node1.hasChildNodes());

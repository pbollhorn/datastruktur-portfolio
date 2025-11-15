import Stack from "./stack.js";

console.log("Opret en tom stack:");
const myStack = new Stack();
myStack.printStack();

console.log("Tilføj et element:");
myStack.push("A");
myStack.printStack();

console.log("Tilføj endnu et element:");
myStack.push("B");
myStack.printStack();

console.log("Tilføj yderligere 2 elementer:");
myStack.push("C");
myStack.push("D");
myStack.printStack();

console.log("Fjern et element:");
myStack.pop();
myStack.printStack();

console.log("Iterer gennem stacken med for...of loop:");
for (const data of myStack) {
  console.log(data);
}

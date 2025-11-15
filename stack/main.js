import Stack from "./stack.js";

console.log("Opret en tom stack:");
const myStack = new Stack();
myStack.printStack();

console.log("Tilføj 6 elementer:");
myStack.push("Hej");
myStack.push("med");
myStack.push("dig.");
myStack.push("Jeg");
myStack.push("hedder");
myStack.push("Kaj.");
myStack.printStack();

console.log("Iterer gennem køen med for...of loop:");
for (const data of myStack) {
  console.log(data);
}

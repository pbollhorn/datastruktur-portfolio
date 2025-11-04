import DoublyLinkedList from "./doublylinkedlist.js";

console.log("Opret en tom liste");
const myList = new DoublyLinkedList();
myList.printList();

console.log("Put hardcoded data ind i listen");
myList.hardCodeDataIntoList();
myList.printList();







// Using the iterator in a `for...of` loop
console.log('Iterating over the linked list:');
for (const node of myList) {
  console.log(node.data); // Output: 10, 20, 30
}

// Alternatively, you can spread the nodes into an array
console.log('Linked list as an array:');
console.log([...myList].map(node => node.data)); // Output: [10, 20, 30]
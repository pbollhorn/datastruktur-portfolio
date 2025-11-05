import DoublyLinkedList from "./doublylinkedlist.js";

console.log("Opret en tom liste");
const myList = new DoublyLinkedList();
myList.printList();

console.log("Put data ind i listen");
myList.addFirst("Hej");
myList.addLast("med");
myList.addLast("dig.");
myList.clear();
myList.addLast("Jeg");
myList.addLast("hedder");
myList.addLast("Kaj.");
myList.printList();

// console.log(myList.get(5));

// // Using the iterator in a `for...of` loop
// console.log("Iterating over the linked list:");
// for (const node of myList) {
//   console.log(node.data); // Output: 10, 20, 30
// }

// // Alternatively, you can spread the nodes into an array
// console.log("Linked list as an array:");
// console.log([...myList].map((node) => node.data)); // Output: [10, 20, 30]

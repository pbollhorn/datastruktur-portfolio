import DoublyLinkedList from "./doublylinkedlist.js";

console.log("Opret en tom liste");
const myList = new DoublyLinkedList();
myList.printList();

console.log("Put hardcoded data ind i listen");
myList.hardCodeDataIntoList();
myList.printList();
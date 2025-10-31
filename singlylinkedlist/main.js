import SinglyLinkedList from "./singlylinkedlist.js";

const myList = new SinglyLinkedList();

console.log(myList.head);

myList.add("Hej");
myList.add("med");
myList.add("dig.");
myList.add("Jeg");
myList.add("hedder");
myList.add("Kaj.");

myList.printList();

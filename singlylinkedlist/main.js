import SinglyLinkedList from "./singlylinkedlist.js";

const myList = new SinglyLinkedList();

myList.add("Hej");
myList.add("med");
myList.add("dig.");
myList.add("Jeg");
myList.add("hedder");
myList.add("Kaj.");

myList.printList();

console.log(myList.remove(0));

myList.printList();
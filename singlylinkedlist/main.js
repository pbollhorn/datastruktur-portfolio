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
console.log(myList.getFirst());
console.log(myList.getLast());

myList.add(117);
myList.printList();


myList.clear();
myList.printList();
console.log(myList.getFirst());
console.log(myList.getLast());
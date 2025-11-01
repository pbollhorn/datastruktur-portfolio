import SinglyLinkedList from "./singlylinkedlist.js";

console.log("Opret en tom liste");
const myList = new SinglyLinkedList();
myList.printList();

console.log("Udskriv første og sidste værdi i listen")
console.log(myList.getFirst());
console.log(myList.getLast());

console.log("\nTilføj 6 elementer")
myList.add("Hej");
myList.add("med");
myList.add("dig.");
myList.add("Jeg");
myList.add("hedder");
myList.add("Kaj.");
myList.printList();

console.log("Udskriv første og sidste værdi i listen")
console.log(myList.getFirst());
console.log(myList.getLast());
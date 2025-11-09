import DoublyLinkedList from "./doublylinkedlist.js";

console.log("Opret en tom liste");
const myList = new DoublyLinkedList();
myList.printList();

console.log("Put data ind i listen");
myList.addFirst("Hej");
myList.addLast("med");
myList.addLast("dig.");
myList.addLast("Jeg");
myList.addLast("hedder");
myList.addLast("Kaj.");
myList.printList();

console.log("Itererer over listen med et for...of loop:");
for (const node of myList) {
  console.log(node.data);
}
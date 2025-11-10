import Queue from "./queue.js";

console.log("Opret en tom kø:");
const myQueue = new Queue();
myQueue.printQueue();

console.log("\nTilføj 6 elementer:");
myQueue.enqueue("Hej");
myQueue.enqueue("med");
myQueue.enqueue("dig.");
myQueue.enqueue("Jeg");
myQueue.enqueue("hedder");
myQueue.enqueue("Kaj.");
myQueue.printQueue();

// console.log("Første og sidste værdi i listen")
// console.log(myList.getFirst());
// console.log(myList.getLast());

// console.log("\nTilføj 6 elementer")
// myList.add("Hej");
// myList.add("med");
// myList.add("dig.");
// myList.add("Jeg");
// myList.add("hedder");
// myList.add("Kaj.");
// myList.printList();

// console.log("Første og sidste værdi i listen")
// console.log(myList.getFirst());
// console.log(myList.getLast());

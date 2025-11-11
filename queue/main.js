import Queue from "./queue.js";

console.log("Opret en tom kø:");
const myQueue = new Queue();
myQueue.printQueue();

console.log("Tilføj 6 elementer:");
myQueue.enqueue("Hej");
myQueue.enqueue("med");
myQueue.enqueue("dig.");
myQueue.enqueue("Jeg");
myQueue.enqueue("hedder");
myQueue.enqueue("Kaj.");
myQueue.printQueue();

console.log("Iterer gennem køen med for...of loop:");
for (const data of myQueue) {
  console.log(data);
}

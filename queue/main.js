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

// Using for...of loop
for(const data of myQueue){
    console.log(data);
}

console.log("\nTesting peek:");
console.log(myQueue.peek());

console.log("\nTesting dequeue:");
console.log(myQueue.dequeue());

console.log("\nTesting dequeue:");
myQueue.printQueue();

console.log("\nGetting element 2:");
console.log(myQueue.get(2));
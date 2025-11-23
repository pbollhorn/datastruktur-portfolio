import Queue from "../queue/queue.js";
import Stack from "../stack/stack.js";


export default class Tree {
  constructor() {
    this.root = null;
  }

  // udskriver hele træet i consollen.
  dump() {}

  // opretter en ny node med den givne value, og tilføjer den et sted i træet - du bestemmer selv hvor!
  addValue(value) {}

  // leder efter den givne value i træet, og returnerer den (første) Node der har den
  findValue(value) {}

  removeValue(value) {}



  breadthFirstSearch(value){
    const queue = new Queue();

  }

  depthFirstSearch(value){
    const stack = new Stack();

  }


}

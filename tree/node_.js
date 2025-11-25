// This file is named "node_.js", because naming it "node.js" causes problem with "npx mocha" command
export default class Node {
  constructor(value, parent = null, childNodes = []) {
    this.value = value;
    this.parent = parent;
    this.childNodes = childNodes;
  }

  firstChild() {
    return this.childNodes[0]; // undefined in case of no child nodes
  }

  lastChild() {
    return this.childNodes[this.childNodes.length - 1]; // undefined in case of no child nodes
  }

  hasChildNodes() {
    if (this.childNodes.length === 0) return false;
    else return true;
  }

  appendChild(child) {
    child.parent = this;
    this.childNodes.push(child);
  }

  // removeChild( child ){
  //   for(const node of this.childNodes){
  //     if(node===child)

  //   }
  // }

  // replaceChild( newChild, oldChild )
}

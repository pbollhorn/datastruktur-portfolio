// This file is named "node_.js", because naming it "node.js" causes problem with "npx mocha" command
export default class Node {
  constructor(value, parent = null, childNodes = []) {
    this.value = value;
    this.parent = parent;
    this.childNodes = childNodes;
  }

  firstChild() {
    if (this.childNodes.length > 0) {
      return this.childNodes[0];
    } else {
      return null;
    }
  }

  lastChild() {
    if (this.childNodes.length > 0) {
      return this.childNodes[this.childNodes.length - 1];
    } else {
      return null;
    }
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

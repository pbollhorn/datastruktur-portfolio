// This file is named "node_.js",
// because naming it "node.js" causes problem with "npx mocha" command
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

  // returns the removed child, or null in case it was not a child
  removeChild(child) {
    for (let i = 0; i < this.childNodes.length; i++) {
      if (child === this.childNodes[i]) {
        this.childNodes.splice(i, 1);
        child.parent = null;
        return child;
      }
    }
    return null;
  }

  // replaceChild( newChild, oldChild )
}

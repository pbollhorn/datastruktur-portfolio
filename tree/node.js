export default class Node {
  constructor(value, parent = null, childNodes = []) {
    this.value = value;
    this.parent = parent;
    this.childNodes = childNodes;
  }
}

import assert from "assert";
import Node from "./node_.js";

describe("Testing Node class", function () {
  let nodeA;
  let nodeB;
  let nodeC;

  // Use these nodes for each test:
  this.beforeEach(function () {
    nodeA = new Node("A");
    nodeB = new Node("A");
    nodeC = new Node("A");
  });

  describe("Testing on node with no children", function () {
    it("Testing hasChildNodes() method", function () {
      assert.strictEqual(nodeA.hasChildNodes(), false);
    });
    it("Testing firstChild() method", function () {
      assert.strictEqual(nodeA.firstChild(), undefined);
    });
    it("Testing lastChild() method", function () {
      assert.strictEqual(nodeA.lastChild(), undefined);
    });
  });

  describe("Testing on node with one child", function () {
    it("Testing hasChildNodes() method", function () {
      nodeA.appendChild(nodeB);
      assert.strictEqual(nodeA.hasChildNodes(), true);
    });
    it("Testing firstChild() method", function () {
      nodeA.appendChild(nodeB);
      assert.strictEqual(nodeA.firstChild(), nodeB);
    });
    it("Testing lastChild() method", function () {
      nodeA.appendChild(nodeB);
      assert.strictEqual(nodeA.lastChild(), nodeB);
    });
  });
});

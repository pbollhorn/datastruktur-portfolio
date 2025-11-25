import assert from "assert";
import Node from "./node_.js";

describe("Testing Node class", function () {
  let nodeA;
  let nodeB;
  let nodeC;

  // Use these nodes for each test:
  this.beforeEach(function () {
    // nodeA has no children
    nodeA = new Node("A");

    // nodeB has one child: nodeC
    nodeB = new Node("B");
    nodeC = new Node("C");
    nodeB.appendChild(nodeC);

    // nodeD has two children: nodeE and nodeF
    nodeD = new Node("D");
    nodeE = new Node("E");
    nodeF = new Node("F");
    nodeD.appendChild(nodeE);
    nodeD.appendChild(nodeF);
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

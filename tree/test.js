import assert from "assert";
import Node from "./node_.js";

describe("Testing Node class", function () {
  let nodeA;
  let nodeB;
  let nodeC;
  let nodeD;
  let nodeE;
  let nodeF;

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

  describe("Testing node with no children", function () {
    it("Testing hasChildNodes() method", function () {
      assert.strictEqual(nodeA.hasChildNodes(), false);
    });
    it("Testing firstChild() method", function () {
      assert.strictEqual(nodeA.firstChild(), null);
    });
    it("Testing lastChild() method", function () {
      assert.strictEqual(nodeA.lastChild(), null);
    });
  });

  describe("Testing node with one child", function () {
    it("Testing hasChildNodes() method", function () {
      assert.strictEqual(nodeB.hasChildNodes(), true);
    });
    it("Testing firstChild() method", function () {
      assert.strictEqual(nodeB.firstChild(), nodeC);
    });
    it("Testing lastChild() method", function () {
      assert.strictEqual(nodeB.lastChild(), nodeC);
    });
  });

  describe("Testing node with two children", function () {
    it("Testing hasChildNodes() method", function () {
      assert.strictEqual(nodeD.hasChildNodes(), true);
    });
    it("Testing firstChild() method", function () {
      assert.strictEqual(nodeD.firstChild(), nodeE);
    });
    it("Testing lastChild() method", function () {
      assert.strictEqual(nodeD.lastChild(), nodeF);
    });
  });
});

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
    it('Testing removeChild( child ) method - removing a "child" that is not actually a child', function () {
      assert.strictEqual(nodeA.removeChild(nodeB), null);
    });
    it('Testing replaceChild( newChild , oldChild ) method - replacing an "oldChild" that is not actually a child', function () {
      assert.strictEqual(nodeA.replaceChild(nodeC, nodeB), null);
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
    it("Testing removeChild( child ) method", function () {
      nodeC = nodeB.removeChild(nodeC);
      assert.strictEqual(nodeB.hasChildNodes(), false);
      assert.strictEqual(nodeB.firstChild(), null);
      assert.strictEqual(nodeB.lastChild(), null);
      assert.strictEqual(nodeC.parent, null);
    });
    it("Testing replaceChild( newChild , oldChild ) method", function () {
      assert.strictEqual(nodeB.replaceChild(nodeA, nodeC), nodeC);
      assert.strictEqual(nodeC.parent, null);
      assert.strictEqual(nodeB.hasChildNodes(), true);
      assert.strictEqual(nodeB.firstChild(), nodeA);
      assert.strictEqual(nodeB.lastChild(), nodeA);
      assert.strictEqual(nodeA.parent, nodeB);
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
    it("Testing replaceChild( newChild , oldChild ) method - Using the method to swap position of two children", function () {
      assert.strictEqual(nodeD.replaceChild(nodeE, nodeF), nodeF);
      assert.strictEqual(nodeD.replaceChild(nodeF, nodeE), nodeE);
      assert.strictEqual(nodeD.firstChild(), nodeF);
      assert.strictEqual(nodeD.lastChild(), nodeE);
    });
  });
});

import assert from "assert";
import Stack from "./stack.js";

describe("Stack", function () {
  let stack = new Stack();

  // Use this stack for each test:
  // 0: F
  // 1: E
  // 2: D
  // 3: C
  // 4: B
  // 5: A
  this.beforeEach(function () {
    stack = new Stack();
    stack.push("A");
    stack.push("B");
    stack.push("C");
    stack.push("D");
    stack.push("E");
    stack.push("F");
  });

  describe("Testing Queue class", function () {
    it("Testing size()", function () {
      assert.strictEqual(stack.size(), 5);
    });
    it("Testing peek()", function () {
      assert.strictEqual(stack.peek(), "A");
      stack.clear();
      assert.strictEqual(stack.peek(), undefined);
    });
    it("Testing peekTail()", function () {
      assert.strictEqual(stack.peekTail(), "E");
      stack.clear();
      assert.strictEqual(stack.peekTail(), undefined);
    });
    it("Testing clear()", function () {
      stack.clear();
      assert.strictEqual(stack.size(), 0);
      assert.strictEqual(stack.peek(), undefined);
    });
    it("Testing get(index)", function () {
      assert.strictEqual(stack.get(-1), undefined);
      assert.strictEqual(stack.get(0), "A");
      assert.strictEqual(stack.get(4), "E");
      assert.strictEqual(stack.get(5), undefined);
    });
    it("Testing dequeue()", function () {
      assert.strictEqual(stack.dequeue(), "A");
      assert.strictEqual(stack.size(), 4);
      stack.dequeue();
      stack.dequeue();
      stack.dequeue();
      assert.strictEqual(stack.dequeue(), "E");
      assert.strictEqual(stack.size(), 0);
      assert.strictEqual(stack.dequeue(), undefined);
      assert.strictEqual(stack.size(), 0);
    });
    it("Testing enqueue(data)", function () {
      stack.enqueue("F");
      assert.strictEqual(stack.size(), 6);
      assert.strictEqual(stack.get(5), "F");
      stack.enqueue("G");
      assert.strictEqual(stack.size(), 7);
      assert.strictEqual(stack.get(6), "G");
    });
  });
});

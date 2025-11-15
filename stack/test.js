import assert from "assert";
import Stack from "./stack.js";

describe("Stack", function () {
  let stack = new Stack();

  // Use this stack for each test:
  // 0: E
  // 1: D
  // 2: C
  // 3: B
  // 4: A
  this.beforeEach(function () {
    stack = new Stack();
    stack.push("A");
    stack.push("B");
    stack.push("C");
    stack.push("D");
    stack.push("E");
  });

  describe("Testing Stack class", function () {
    it("Testing size()", function () {
      assert.strictEqual(stack.size(), 5);
    });
    it("Testing peek()", function () {
      assert.strictEqual(stack.peek(), "E");
    });
    it("Testing clear()", function () {
      stack.clear();
      assert.strictEqual(stack.size(), 0);
      assert.strictEqual(stack.peek(), undefined);
    });
    it("Testing get(index)", function () {
      assert.strictEqual(stack.get(-1), undefined);
      assert.strictEqual(stack.get(0), "E");
      assert.strictEqual(stack.get(4), "A");
      assert.strictEqual(stack.get(5), undefined);
    });
    it("Testing push(data)", function () {
      stack.push("F");
      assert.strictEqual(stack.size(), 6);
      assert.strictEqual(stack.peek(), "F");
      assert.strictEqual(stack.get(0), "F");
      stack.push("G");
      assert.strictEqual(stack.size(), 7);
      assert.strictEqual(stack.peek(), "G");
      assert.strictEqual(stack.get(0), "G");
    });
    it("Testing pop()", function () {
      assert.strictEqual(stack.pop(), "E");
      assert.strictEqual(stack.size(), 4);
      stack.pop();
      stack.pop();
      stack.pop();
      assert.strictEqual(stack.pop(), "A");
      assert.strictEqual(stack.size(), 0);
      assert.strictEqual(stack.pop(), undefined);
      assert.strictEqual(stack.size(), 0);
    });
  });
});

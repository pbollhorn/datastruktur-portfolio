import assert from "assert";
import Queue from "./queue.js";

describe("Queue", function () {
  let queue = new Queue();

  // Use this queue for each test:
  // 0: A
  // 1: B
  // 2: C
  // 3: D
  // 4: E
  // 5: F
  this.beforeEach(function () {
    queue = new Queue();
    queue.enqueue("A");
    queue.enqueue("B");
    queue.enqueue("C");
    queue.enqueue("D");
    queue.enqueue("E");
  });

  describe("Testing Queue class", function () {
    it("Testing size()", function () {
      assert.strictEqual(queue.size(), 5);
    });
    it("Testing peek()", function () {
      assert.strictEqual(queue.peek(), "A");
      queue.clear();
      assert.strictEqual(queue.peek(), undefined);
    });
    it("Testing peekTail()", function () {
      assert.strictEqual(queue.peekTail(), "E");
      queue.clear();
      assert.strictEqual(queue.peekTail(), undefined);
    });
    it("Testing clear()", function () {
      queue.clear();
      assert.strictEqual(queue.size(), 0);
      assert.strictEqual(queue.peek(), undefined);
    });
    it("Testing get(index)", function () {
      assert.strictEqual(queue.get(-1), undefined);
      assert.strictEqual(queue.get(0), "A");
      assert.strictEqual(queue.get(4), "E");
      assert.strictEqual(queue.get(5), undefined);
    });
    it("Testing dequeue()", function () {
      assert.strictEqual(queue.dequeue(), "A");
      assert.strictEqual(queue.size(), 4);
      queue.dequeue();
      queue.dequeue();
      queue.dequeue();
      assert.strictEqual(queue.dequeue(), "E");
      assert.strictEqual(queue.size(), 0);
      assert.strictEqual(queue.dequeue(), undefined);
      assert.strictEqual(queue.size(), 0);
    });
    it("Testing enqueue(data)", function () {
      queue.enqueue("F");
      assert.strictEqual(queue.size(), 6);
      assert.strictEqual(queue.get(5), "F");
      queue.enqueue("G");
      assert.strictEqual(queue.size(), 7);
      assert.strictEqual(queue.get(6), "G");
    });
  });
});

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
      assert.equal(queue.size(), 5);
    });
    it("Testing peek()", function () {
      assert.equal(queue.peek(), "A");
    });
    it("Testing clear()", function () {
      queue.clear();
      assert.equal(queue.size(), 0);
      assert.equal(queue.peek(), undefined);
    });
    it("Testing get(index)", function () {
      assert.equal(queue.get(-1), undefined);
      assert.equal(queue.get(0), "A");
      assert.equal(queue.get(4), "E");
      assert.equal(queue.get(5), undefined);
    });
    it("Testing dequeue()", function () {
      assert.equal(queue.dequeue(), "A");
      assert.equal(queue.size(), "4");
      queue.dequeue();
      queue.dequeue();
      queue.dequeue();
      assert.equal(queue.dequeue(), "E");
      assert.equal(queue.size(), "0");
      assert.equal(queue.dequeue(), undefined);
      assert.equal(queue.size(), "0");
    });
    // it("Testing size()", function () {
    //   assert.equal(grid.size(), 15);
    // });
    // it("Testing get({ row, col })", function () {
    //   assert.equal(grid.get({ row: 0, col: 0 }), "A");
    //   assert.equal(grid.get({ row: 2, col: 1 }), "H");
    //   assert.equal(grid.get({ row: 4, col: 2 }), "O");
    //   assert.equal(grid.get({ row: -1, col: 0 }), undefined);
    //   assert.equal(grid.get({ row: rows, col: 0 }), undefined);
    //   assert.equal(grid.get({ row: 0, col: -1 }), undefined);
    //   assert.equal(grid.get({ row: 0, col: cols }), undefined);
    // });
    // it("Testing indexFor({ row, col })", function () {
    //   assert.equal(grid.indexFor({ row: 2, col: 1 }), 7);
    //   assert.equal(grid.indexFor({ row: 4, col: 2 }), 14);
    // });
    // it("Testing rowColFor( index )", function () {
    //   assert.deepStrictEqual(grid.rowColFor(7), { row: 2, col: 1 });
    //   assert.deepStrictEqual(grid.rowColFor(14), { row: 4, col: 2 });
    // });
    // it("Testing north({ row, col })", function () {
    //   assert.deepStrictEqual(grid.north({ row: 2, col: 1 }), {
    //     row: 1,
    //     col: 1,
    //     value: "E",
    //   });
    //   assert.equal(grid.north({ row: 0, col: 1 }), undefined);
    // });
  });
});

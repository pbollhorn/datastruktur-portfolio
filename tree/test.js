import assert from "assert";
import Node from "./node_.js";

describe("Testing Node class", function () {
  let node = new Node("Hej");

  // Use this node for each test:
  this.beforeEach(function () {
    node = new Node("Hej");
  });

  describe("Testing hasChildNodes() method", function () {
    it("Testing hasChildNodes() method", function () {
      assert.strictEqual(node.hasChildNodes(), false);
    });
  });
  // describe("Testing hasChildNodes() method", function () {
  //   it("Testing hasChildNodes() method", function () {
  //     assert.strictEqual(false, false);
  //   });
  // });
});

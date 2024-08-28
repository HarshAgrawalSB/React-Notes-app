const assert = require("assert");

// Example function to test
function add(a, b) {
  return a + b;
}

// Basic test
function testAddFunction() {
  try {
    assert.strictEqual(add(2, 3), 5, "2 + 3 should equal 5");
    assert.strictEqual(add(-1, 1), 0, "-1 + 1 should equal 0");
    console.log("All tests passed!");
  } catch (error) {
    console.error("Test failed:", error.message);
  }
}

// Run the test
testAddFunction();

const assert = require("assert");
const calculateNumber = require("./0-calcul.js");

describe("calculateNumber", () => {
  it("Rounding two integer numbers", () => {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it("Rounding one integer and the other float", () => {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it("Rounding float numbers with one roundup", () => {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it("Rounding float numbers with both roundup", () => {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
});

const mostFrequent = require("../src/find-most-frequent");

it("should be contain", () => {
  expect(mostFrequent([1, 1, 2, 3])).toEqual([1]);
});
it("should be contain", () => {
  expect(mostFrequent([1, 1, 2, 2, 3])).toEqual([1, 2]);
});
it("should be contain", () => {
  expect(mostFrequent([1, 1, "2", "2", 3])).toEqual([1, "2"]);
});
o
  

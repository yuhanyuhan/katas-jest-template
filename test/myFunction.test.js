const myFunction = require("../src/myFunction");

it("should be replaced with a descriptive message", () => {
  expect(myFunction({A: 20, B: 15, C: 10})).toEqual({A: 5, B: 0, C: -5});
});

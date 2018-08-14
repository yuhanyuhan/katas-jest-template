const getMiddle = require("../src/get-middle");

it("should be contain", () => {
  expect(getMiddle(("test"))).toEqual("es");
  expect(getMiddle(("testing"))).toEqual("t");
  expect(getMiddle(("middle"))).toEqual("dd");
  expect(getMiddle(("A"))).toEqual("A");

});

  

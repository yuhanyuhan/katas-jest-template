const arr = [9, 3];

const {insertionSort, swap} = require("../src/insertionSort");

it("insertion test", () => {
  expect(insertionSort(arr)).toEqual([3,9]);
});

it("insertion test", () => {
    expect(insertionSort([6,4,2])).toEqual([2,4,6]);
  });

it.skip("insertion test", () => {
  expect(insertionSort([1])).toEqual([1]);
  expect(insertionSort([])).toEqual([]);
});


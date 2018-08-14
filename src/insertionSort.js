const swap = (arrCopy, index1, index2) => {
    // const arrCopy = arr.slice();

    [ arrCopy[index1], arrCopy[index2] ] = [ arrCopy[index2], arrCopy[index1] ];
    return arrCopy;
};

const insertionSort = arr => {
  if (arr.length <= 1) return arr;

  //arr has two ele, always access to the second ele, compare to the first ele
  for (let i = 1; i < arr.length; i++) {
    let redElement = arr[i];

    let hasReachedMinimum = false;

    for (let j = i - 1; !hasReachedMinimum; j--) {
      let greenElement = arr[j];
      if (redElement < greenElement) {
        swap(arr, j + 1, j);
      } else {
          hasReachedMinimum = true;
      }
    }
  }
  return arr;
};

module.exports = {
    insertionSort,
    swap
}

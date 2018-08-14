const mostFrequent=(arr) => {
  var arrSorted = arr.sort(); 
  var results = [];
  for (let i = 0; i < arrSorted.length - 1; i++) {
    if ((arrSorted[i + 1] - arrSorted[i]) === 0 ) {
      results.push(arrSorted[i]);
    }
  }
  return results
}


module.exports = mostFrequent;
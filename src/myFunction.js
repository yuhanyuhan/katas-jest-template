const myFunction = x => {
    var total = ((Object.keys(x).reduce((accumulator, b) => { 
      console.log(b, x[b]);
      return (accumulator + x[b])
    }, 0)))
    var totalPeople = Object.keys(x).length
    var avg = (total/totalPeople)
    
    for (var key in x) {
      x[key] = Number((x[key] - avg).toFixed(2))
    }
  return x
};

module.exports = myFunction;

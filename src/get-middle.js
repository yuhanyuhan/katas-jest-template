const getMiddle = str => {
    var split = str.split('');
    var stringLength = split.length
    var start = stringLength / 2  
    var isEven = stringLength % 2 === 0 
    return isEven ? split.slice((start-1), (start+1)).join('').toString(' ') : split.slice(start, (start+1)).toString(' ')
} 

module.exports = getMiddle;
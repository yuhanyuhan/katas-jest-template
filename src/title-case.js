const titleCase = (title, minorWords) => {
  if (title === "") return title;

  const minorWordsArr =
    minorWords !== undefined ? minorWords.toLowerCase().split(" ") : []

  return title
    .toLowerCase()
    .split(" ")
    .map((word, i) => {
      if (i === 0 || minorWordsArr.indexOf(word) === -1) {
        return word[0].toUpperCase() + word.substring(1);
      }
      return word;
    })
    .join(" ");
};

module.exports = titleCase;

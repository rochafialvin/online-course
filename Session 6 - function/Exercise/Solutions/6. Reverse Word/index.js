//////////////////
/* REVERSE WORD */
/////////////////

const reverseWords = (word) => {
  var words = word.split(" ");

  return words.map((word) => {
    return word.split("").reverse().join("");
  });
};

console.log(reverseWords("Hai aku Joan Mir"));

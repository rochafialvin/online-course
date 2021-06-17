//////////////////
/* REVERSE WORD */
/////////////////

/* Reverse untuk setiap kata */

/* Hai aku Joan Mir */
/* iaH uka naoJ riM */

/*
  Hai aku Joan Mir

  // split(" ")
  ["Hai", "aku", "Joan", "Mir"]

  // map
  ["iaH", "uka", "naoJ", "riM"]

      "Hai"

      // split
      ["H", "a", "i"]

      // reverse
      ["i", "a", "H"]

      // join
      return "iaH"

  // join
  iaH uka naoJ riM

*/


const reverseWords = (word) => {
  // word : "Hai aku Joan Mir"
  const words = word.split(" ");

  // words : ["Hai", "aku", "Joan", "Mir"]
  // wordFinal : [ "iaH", "uka", "naoJ", "riM" ]
  let wordsFinal = words.map((word) => {
    // word : "Hai"

    // word : ["H", "a", "i"]
    word = word.split("");

    // word : ["i", "a", "H"]
    word.reverse();

    // word : "iaH"
    word = word.join("");

    return word;
  });

  wordsFinal = wordsFinal.join(" ");

  return wordsFinal;
};

const reverseWords = (word) => {
  // ["Hai", "aku", "Joan", "Mir"]
  let words = word.split(" ");

  // wordFinal = [ "iaH", "uka", "naoJ", "riM" ]
  let wordsFinal = words.map((val) => {
    val = val.split("").reverse().join("");

    return val;
  });

  // wordsFinal = iaH uka naoJ riM
  return wordsFinal.join(" ");
};

const reverseWords = (word) => {
  let words = word.split(" ");

  let wordsFinal = words.map((word) => {
    return word.split("").reverse().join("");
  });

  return wordsFinal.join(" ");
};

const reverseWords2 = (word) => {
  let wordsFinal = word
    .split(" ")
    .map((word) => {
      return word.split("").reverse().join("");
    })
    .join(" ");

  return wordsFinal;
};

console.log(reverseWords("Hai aku Joan Mir"));

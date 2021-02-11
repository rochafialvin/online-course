///////////////////
/* CAESAR CIPHER */
//////////////////

// len = 26
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
console.table(alphabet);
const caesarchiper = (word, shift) => {
  // word "Sunday Six"   ,  shift = 2

  const words = word.split(" ");
  // ["Sunday", "Six"]
  // wordsResult = ["Uwpfca", "Ukz"]
  const wordsResult = words.map((word) => {
    // word = "Sunday"
    // wordIndSplitted = ["s", "u", "n", "d", "a", "y"]
    const wordIndSplitted = word.toLowerCase().split("");
    // wordIndShifted = ['u','w', 'p', 'f', 'c', 'a' ]
    const wordIndShifted = wordIndSplitted.map((word, idx) => {
      // word = "s" , idx = 0
      // idxAlphabet = (18 + 2) % 26 = 20
      const idxAlphabet = (alphabet.indexOf(word) + shift) % 26;
      // alphabet[20]
      return alphabet[idxAlphabet];
    });

    // wordIndShifted = ['U','w', 'p', 'f', 'c', 'a' ]
    wordIndShifted[0] = wordIndShifted[0].toUpperCase();

    // "Uwpfca"
    return wordIndShifted.join("");
  });

  // wordsResult = ["Uwpfca", "Ukz"]
  // "Uwpfca Ukz"
  return wordsResult.join(" ");
};

// Cde Zab
console.log(caesarchiper("Abc Xyz", 2));
// Uwpfca Ukz
console.log(caesarchiper("Sunday Six", 2));

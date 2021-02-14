///////////////////
/* CAESAR CIPHER */
//////////////////

/* Setiap hurufnya akan berubah menjadi huruf berikutnya dengan jarak tertentu */
/* "Sunday Six" (shift = 2)  ==>  "Uwpfca Ukz" */

/* 

  length = 5 
  a b c d e 

  b shift = 7 

  next index = (index + shift) % length
  next index = (1 + 7) % 5 = 3


  alphabet pada index 3 adalah d

*/

/* 
  a b c d e f g h i j k l m n o p q r s t u v w x y z
  "Abc Yz" shift 2

  // split(" ")
  result : ["Abc", "Yz"]

  // map
  result : ["Cde", "Ab"]

    // lowercase
    result : "abc"

    // split 
    result : ["a", "b", "c"]

    // map
    result : ["c", "d", "e"]

      next index = index + (shift % length of alphabet)
      next index = 0 + (2 % 26) = 2
      return alphabet[2]

    // toUppercCase untuk huruf dengan index ke 0
    result : ["C", "d", "e"]

    // join
    result : "Cde"

    return "Cde"

  // join(" ")
  result : "Cde Ab"

  return "Cde Ab"

*/

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
// console.table(alphabet);

// "Abc Yz"
const caesarcipher = (word, shift) => {
  // split(" ")
  // words = ["Abc", "Yz"]
  const words = word.split(" ");

  // map
  // wordsResult = ["Cde", "Ab"]
  const wordsResult = words.map((word) => {
    // word = "Abc"
    // lowercase , word = "abc"
    // split, wordSplitted = [a b c]
    const wordSplitted = word.toLowerCase().split("");

    // map
    // wordShifted = [c d e]
    const wordShifted = wordSplitted.map((word, idx) => {
      // word = a
      // nextIndex = (0 + 2) % 26 = 2
      const nextIndex = (alphabet.indexOf(word) + shift) % 26;
      // alphabet[2] = c
      return alphabet[nextIndex];
    });

    // toUppercCase untuk huruf dengan index ke 0
    // wordShifted = [C d e]
    wordShifted[0] = wordShifted[0].toUpperCase(); // C

    // join
    // [C d e]
    // Cde
    return wordShifted.join("");
  });

  // join(" ")
  return wordsResult.join(" ");
};

// Cde Zab
console.log(caesarcipher("Abc Xyz", 2));
// Uwpfca Ukz
console.log(caesarcipher("Sunday Six", 2));

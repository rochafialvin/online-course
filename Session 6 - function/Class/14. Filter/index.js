////////////
/* FILTER */
///////////

/*
  1. Callback function akan me-return suatu boolean.

  2. Callback me-return true : value yang sedang diproses akan disimpan ke array baru.

  3. Callback me-return false : value yang sedang diproses akan diabaikan.

  2. Filter akan me-return array baru.
*/

/* Odd Filter */

var numbers = [1, 2, 3, 4, 5];

var numResult = numbers.filter((number) => {
  if (number % 2 == 1) {
    return true;
  } else {
    return false;
  }
});

var numResult = numbers.filter((number) => {
  return number % 2 == 1;
});

console.log(numResult);

/* Character length filter (more than 5 characters) */

var words = ["Koro Sensei", "Jin Mori", "Eren", "Tanjirou", "Zorro"];

var lenResult = words.filter((word) => {
  return word.length > 5;
});

console.log(lenResult);

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Buat function yang akan memfilter seseorang yang memiliki umur lebih dari 30 atau tinggal di Jakarta //
// [                                                                                                    //
//   ["John", 43, "Jakarta"],                                                                           //
//   ["Baby", 21, "Jakarta"],                                                                           //
//   ["Tony", 34, "Surabaya"],                                                                          //
//   ["Justin", 29, "Banjarmasin"],                                                                     //
// ];                                                                                                   //
//                                                                                                      //
// [                                                                                                    //
//   ["John", 43, "Jakarta"],                                                                           //
//   ["Baby", 21, "Jakarta"],                                                                           //
//   ["Tony", 34, "Surabaya"],                                                                          //
// ];                                                                                                   //
//////////////////////////////////////////////////////////////////////////////////////////////////////////

var persons = [
  ["John", 43, "Jakarta"],
  ["Baby", 21, "Jakarta"],
  ["Tony", 34, "Surabaya"],
  ["Justin", 29, "Banjarmasin"],
];

var ageAddress = (arr) => {
  return arr.filter((val) => {
    return val[1] > 30 || val[2] == "Jakarta";
  });
};

var result = ageAddress(persons);
console.table(result);

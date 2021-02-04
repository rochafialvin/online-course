/////////////////////
/* SORT (Advanced) */
/////////////////////

/* String */

var words = ["red", "apple", "rain", "cat", "green"];

words.sort();

// console.log(words);

/* Numbers */

/*
  1. return < 0 , a akan berada sebelum b

  2. return 0 , posisi a dan b tidak berubah

  3. return > 0 , b akan berada sebelum a

*/

var numbers = [23, 47, 13, 3, 9];

var asc = (a, b) => {
  return a - b;
};

var dsc = (a, b) => {
  return a + b;
};

numbers.sort(asc);
console.log(numbers);

///////////////////////////////////////////////////////////////////////////////////////////////////
// Buat function yang akan mensorting array 2 dimensi ini berdasarkan nama, dan umur (ascending) //
// var persons = [                                                                               //
//     ['John', 43],                                                                             //
//     ['Baby', 21],                                                                             //
//     ['Tony', 44],                                                                             //
//     ['Justin', 29]                                                                            //
// ]                                                                                             //
///////////////////////////////////////////////////////////////////////////////////////////////////

/* Clue : comparison between character */

// 65 > 66 : false
console.log("A" > "B");

// 65 < 97 : true
console.log("A" < "a");

// A : 65 < a : 97 : true
console.log("Alvin" < "alvin");

// l : 108 < b : 98 : false
console.log("Alvin" < "Abed");

// L : 76 < b : 98 : true
console.log("ALvin" < "Abed");

var persons = [
  ["John", 44],
  ["John", 43],
  ["Baby", 21],
  ["Justin", 29],
];

var personsSort = (arr) => {
  arr.sort((a, b) => {
    if (a[0] < b[0]) {
      return -1;
    } else if (a[0] > b[0]) {
      return 1;
    } else {
      return a[1] - b[1];
    }
  });

  return arr;
};

var result = personsSort(persons);
console.log(result);

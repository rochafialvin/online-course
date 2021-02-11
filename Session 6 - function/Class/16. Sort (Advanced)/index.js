/////////////////////
/* SORT (Advanced) */
/////////////////////

/* String */

var words = ["red", "apple", "rain", "cat", "green"];

words.sort();

console.log(words);

/* Numbers */

var numbers = [23, 47, 13, 3, 9, 240];

/*
  1. Callback function memiliki dua parameter

  2. Callback function harus me-return nilai dari salah satu kondisi

      a. return < 0 , a akan berada didepan b

      b. return 0 , posisi a dan b tidak berubah

      c. return > 0 , b akan berada didepan a
*/

var asc = (a, b) => {
  return a - b;
};

var dsc = (a, b) => {
  return b - a;
};

var numbers = [23, 47, 13, 3, 9, 240];

numbers.sort(asc);

console.log(numbers);

///////////////////////////////////////////////////////////////////////////////////////////////////
// Buat function yang akan mensorting array 2 dimensi ini berdasarkan nama, dan umur (ascending) //
// var persons = [                                                                               //
//     ['John', 44],                                                                             //
//     ['John', 43],                                                                             //
//     ['Baby', 21],                                                                             //
//     ['Justin', 29]                                                                            //
// ]                                                                                             //
///////////////////////////////////////////////////////////////////////////////////////////////////

/* Clue : comparison between character */

// 65 > 66 : false
console.log("A" > "B");

// 65 > 97 : false
console.log("A" > "a");

// A : 65 < a : 97 : true
console.log("Alvin" < "alvin");

// l : 108 < b : 98 : false
console.log("Alvin" < "Abed");

/*
      a. return < 0 , a akan berada didepan b

      b. return 0 , posisi a dan b tidak berubah

      c. return > 0 , b akan berada didepan a
*/

var persons = [
  ["John", 44],
  ["John", 43],
  ["Baby", 21],
  ["Justin", 29],
];

var personsSort = (arr) => {
  /*

    arr = [
      ["Baby", 21],
      ["John", 43],
      ["John", 44],
      ["Justin", 29],
    ];

  */

  arr.sort((a, b) => {
    // a = ["John", 44]
    // b = ["Justin", 29]
    var nameA = a[0]; // John
    var nameB = b[0]; // Justin

    if (nameA < nameB) {
      return -1;
    } else if (nameA > nameB) {
      return 1;
    } else {
      // 44 - 43 = 1
      return a[1] - b[1];
    }
  });

  return arr;
};

var result = personsSort(persons);
console.table(result);

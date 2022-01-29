// Naming variabel
// Shorthand Operator
// String method
// Boolean (Perbandingan) / Truthy & Falsy value
// Loop while + shorthand
// Loop do while + switch
// Loop for + array
// Array dan Object menantang THIS !!!
// Function
// Function return function / obj / array THIS !!!
// Callback function (Caling function at argument) THIS !!!
// Class dan inheritance
// isNaN THIS !!!
// recursive function THIS !!!

/*
  Array menantang
  Berisi campuran tipe data, termasuk deep nested
  Melakukan method terhadap deep nested array

*/

// Array dan Object menantan
const things = [
  "clock",
  2,
  2,
  [3, 4],
  [{ one: 1, two: 2 }],
  { first: { firstOne: 1.1, firstTwo: 1.2 } },
  () => {
    return [[123], { random: 123 }];
  },
];

things[0]; // clock
things[3]; // [3, 4]
things[3][0]; // 3
things[3][1]; // 4

things[4]; // [{ one: 1, two: 2 }]
things[4][0]; // { one: 1, two: 2 }
things[4][0].one; // 1
things[4][0].two; // 2

things[5]; // { first: { firstOne: 1.1, firstTwo: 1.2 } }
things[5].first; // { firstOne: 1.1, firstTwo: 1.2 }

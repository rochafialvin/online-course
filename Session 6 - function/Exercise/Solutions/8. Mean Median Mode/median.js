// MEDIAN

/* Nilai tengah */

/* Total data : Ganjil */
/*

  length : 7
  [2 3 4 5 7 6 7]

  [2 3 4 5 6 7 7]

  median : length / 2
  median : 7 / 2 = 3.5
  median : Math.floor(3.5)
  median : numbers[3]
  median : 5

*/

/* Total data : Genap */
/*

  length : 8
  [2 3 4 5 7 6 7 9]

  [2 3 4 5 6 7 7 9]

  median : length / 2
  median : 8 / 2
  median : (numbers[4] + numbers[3]) / 2
  median : ( 6 + 5 ) / 2 = 5.5

*/

const median = (numbers) => {
  // numbers = [2, 3, 4, 5, 7, 6, 7, 9]
  // half = 8 / 2 = 4
  const len = numbers.length;
  const half = Math.floor(len / 2);

  // numbers = [ 2 3 4 5 6 7 7 9]
  numbers.sort((a, b) => {
    return a - b;
  });

  // jika total data : ganjil
  if (len % 2 == 1) {
    return numbers[half];
    // jika total data : genap
  } else {
    return (numbers[half] + numbers[half - 1]) / 2;
  }
};

console.log(median([2, 3, 4, 5, 7, 6, 7]));
console.log(median([2, 3, 4, 5, 7, 6, 7, 9]));

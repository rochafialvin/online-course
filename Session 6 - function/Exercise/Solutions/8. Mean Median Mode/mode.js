// MODE

/* Angka yang sering muncul */

/*
  [3, 4, 5, 5, 1, 4, 3, 3, 5, 3]

  1 : 1
  3 : 4 (mode)
  4 : 2
  5 : 3

  count : [ und, 1, und, 4, 2, 4 ]
  maxCount : 4

  mode : ambil semua nomor index yang menyimpan nilai sebesar maxCount
  mode : 3


*/

const mode = (numbers) => {
  let maxCount = 0;
  let counts = [];
  let mode = [];

  // [3, 4, 5, 5, 6, 7, 3, 3, 5]
  numbers.forEach((number) => {
    counts[number] = (counts[number] || 0) + 1;

    if (counts[number] > maxCount) {
      maxCount = counts[number];
    }
  });

  counts.forEach((count, idx) => {
    if (count == maxCount) {
      mode.push(idx);
    }
  });

  console.log(mode);
};

mode([3, 4, 5, 5, 1, 4, 3, 3, 5, 3]);
mode([3, 4, 5, 5, 1, 4, 3, 3, 5]);

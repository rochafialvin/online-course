// MODE

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

mode([3, 4, 5, 5, 6, 7, 3, 3, 5, 3]);

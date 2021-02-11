// MEDIAN

const median = (numbers) => {
  const len = numbers.length;
  const half = Math.floor(len / 2);

  numbers.sort((a, b) => {
    return a - b;
  });

  console.log(numbers);

  if (len % 2 == 1) {
    return numbers[half];
  } else {
    return (numbers[half] + numbers[half - 1]) / 2;
  }
};

console.log(median([2, 3, 4, 5, 7, 6, 7, 9]));

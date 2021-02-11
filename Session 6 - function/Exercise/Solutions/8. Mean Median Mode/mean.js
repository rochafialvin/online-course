// MEAN

const mean = (numbers) => {
  let sum = 0;
  numbers.forEach((number) => {
    sum += number;
  });

  console.log({ sum, len: numbers.length });
  return sum / numbers.length;
};

console.log(mean([1, 2, 3, 2, 5, 2, 7, 2]));

// MEAN //

// numbers :  [1, 2, 3, 5, 7]
const mean = (numbers) => {
  let sum = 0

  numbers.forEach((number) => {
    // number : 7
    // sum : 11
    sum += number

    // sum : 18
    
  })

  // 18 : 5 = 3.6
  return sum / numbers.length
}

console.log(mean([1, 2, 3, 5, 7]))
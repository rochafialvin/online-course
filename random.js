function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const rndInt = randomIntFromInterval(1, 6)
console.log(rndInt)

// min = 2, max = 6
// 0.9 * (6 - 2 + 1) + 2
// 0.9 * 5 + 2
// 6.5
// 6
Math.floor(Math.random() * (max - min + 1) + min)
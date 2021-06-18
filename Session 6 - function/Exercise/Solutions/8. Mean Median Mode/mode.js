//////////
/* MODE */
//////////

/* Angka yang sering muncul */

/*
  numbers = [3, 4, 5, 5, 1, 4, 3, 3, 5, 3, 5]

  number : 3

  counts[3] == und ?
    true : jadikan 0 + 1
    false : angka yang disimpan + 1

  counts[3] > maxCount
    true : maxCount = counts[5]
    false : do nothing

  
  1 : 1
  2 : und
  3 : 4 (mode)
  4 : 2
  5 : 4 (mode)

  counts = [und, 1, und, 4, 2, 4]
  maxCount = 4

  mode : ambil semua nomor index yang menyimpan nilai sebesar maxCount
  mode : [3, 5]

*/
const mode = (numbers) => {
  let maxCount = 0
  let counts = []
  let mode = []

  // numbers = [3, 4, 5, 5, 1, 4, 3, 3, 5, 3, 5]
  // counts = [und, 1, und, 4, 2, 4]
  numbers.forEach((number) => {

    // number : 5
    // counts[5] = (counts[5] || 0) + 1
    // counts[5] = (1 || 0) + 1
    // counts[5] = ( 1 ) + 1
    // counts[5] = 2
    counts[number] = (counts[number] || 0) + 1

    // maxCount = 4
    if(counts[number] > maxCount){
      maxCount = counts[number]
    }
  })

  // counts = [und, 1, und, 4, 2, 4]
  counts.forEach((count, index) => {
    // count = 4
    // index = 5
    // maxCount = 4
    
    // mode = [3, 5 ]
    if(count == maxCount){
      mode.push(index)
    }
  })

  // mode = [3, 5 ]
  return mode
}

console.log(mode([3, 4, 5, 5, 1, 4, 3, 3, 5, 3, 5]))
//////////////////////////
// REVERSE ARRAY IN PLACE
//////////////////////////

/*

  Aturan utama

  1. Hanya boleh ada satu array


  Algoritma

  var numbers = [ 1 , 2, 3, 4, 5, 6, 7, 8] (length : 8)

  var tmp = 1

  value pertama : value yang akan disimpan ke dalam variable tmp
    1 2 3 4

  value kedua : value yang langsung menempati index milik value pertama
    8 7 6 5

  1. Pindahkan value pertama pada variabel tmp

  2. Pindahkan value kedua ke index milik value pertama

  3. Pindahkan value pada variabel tmp ke index milik value kedua


  index value pertama : 0 1 2 3 => i

  index value kedua   : 7 6 5 4 => number.length - 1 - i
*/


////////////////////////////////////////////////////////////////////////////////////////////////////
// Terdapat tiga versi penulisan yang berbeda
// Namun jika diperthatikan, mereka memiliki algoritma yang sama dengan yang kita bahas pada video
////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////
// VERSI 1
/////////////

// Array numbers
var nums = [1, 2, 3, 4, 5, 6, 7, 8]
var stop = Math.floor(nums.length / 2)

// Banyaknya loop tergantung dari banyaknya data pada array
for (var i = 0; i < stop; i++) {
    // Menyimpan value pertama yang akan ditukar
    let el = nums[i];
    // Menempatkan value kedua di index milik value pertama
    nums[i] = nums[nums.length - 1 - i];
    // Menempatkan value pertama di index milik value kedua
    nums[nums.length - 1 - i] = el;
}

console.table(nums)

/////////////
// VERSI 2
/////////////

// length : 8
var nums = [1, 2, 3, 4, 5, 6, 7, 8]

// stop : 4
var stop = Math.floor(nums.length / 2)

// i : 0 1 2 3
for (var i = 0 ; i < stop ; i++){

  var firstIndex = i
  var secondIndex = nums.length - 1 - i

  // 1. Pindahkan value pertama ke variabel tmp
  var tmp = nums[firstIndex]
  // 2. Pindahkan value kedua ke index milik value pertama
  nums[firstIndex] = nums[ secondIndex ]
  // 3. Pindahkan value pada variabel tmp ke index milik value kedua
  nums[ secondIndex ] = tmp

}

console.table(nums)

/////////////
// VERSI 3
/////////////

// Array numbers
var nums = [1, 2, 3, 4, 5, 6, 7, 8]
var numsLength = nums.length - 1
var stop = Math.floor(nums.length / 2)

// Banyaknya loop tergantung dari banyaknya data pada array
for (var i = 0; i < stop; i++) {
    // Menyimpan value pertama yang akan ditukar
    let el = nums[i];
    // Menempatkan value kedua di index milik value pertama
    nums[i] = nums[numsLength - i];
    // Menempatkan value pertama di index milik value kedua
    nums[numsLength - i] = el;
}

console.table(nums)

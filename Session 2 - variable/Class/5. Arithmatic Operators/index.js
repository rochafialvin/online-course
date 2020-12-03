// S2 - Slide 28

//Numbers
var a = 23
var b = 3
var c = 3.14


// Penjumlahan / Addition
// // // // //

// 23 + 3
var addOne = a + b
// 26
console.log(addOne)

// 23 + 3 + 3.14 == 29.14
console.log(a + b + c)



// Pengurangan / Subtraction
// // // // //

// 23 - 3
var subOne = a - b
// 20
console.log(subOne)

// 3 - 23 = -20
console.log(b - a);

// 23 - 3 - 3 - 23 = -6
console.log(a - b - b - a)

// 23 - 3 - ( 3 - 23)
// 20 - (-20) == 20 + 20
// 40
console.log(a - b - (b - a))



// Perkalian / Multiplication
// // // // //

// 23 * 3 = 69
console.log(a * b)

// 23 * -2 = -46
console.log(a * -2)



// Pembagian / Division
// // // // //

// 23 / 3  = 7.6
console.log(a / b)

// 23 / -3 = -7.6
console.log(a / -3)

// 9 - 6 / 5
// 9 / 1.2
// 7.5
console.log(4 + 5 - (2 * 3) / 5)


// Modulus / Mode
// // // // // //

// 11 11 11 11 11
var modTwo = 10 % 2
// 0
console.log(modTw0)

// 111 111 111 1
var modThree = 10 % 3
// 1
console.log(modThree)

// 1111 1111 11
var modFour = 10 % 4
// 2
console.log(modFour)

// Genap / Ganjil
// Bilangan ganjil : jika di modulus 2 akan menghasilkan 1

// 11 11 11 1
var oddSeven = 7 % 2
// 11 11 11 11 1
var oddNine = 9 % 2

// Bilangan genap : jika di modulus 2 akan menghasilkan 0

// 11 11
var evenFour = 4 % 2
// 11 11 11 11 11 11 11
var evenFourTeen = 14 % 2


// Increment
var number = 10
// number += 1
number++
// 11
console.log(number)

// Decrement
var number = 10
// number -= 1
number--
// 9
console.log(number)

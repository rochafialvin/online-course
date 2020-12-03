// S2 - Slide 48

// Strings
"Happy Weekend !"
"23 is an odd number"
// bukan number
"1234"
console.lot(typeof("1234"))
// bukan boolean
"true"
console.lot(typeof("true"))

// kutip dua
var greet = "Wait i'll be there in a second"
console.log(greet)

// kutip satu
// var greet = 'Wait i'll be there in a second'
console.log(greet)

// kutip satu + escape character
var greet = 'Wait i\'ll be there in a second'
console.log(greet)

// new line
console.log("Hello \n Guys!")

// tab
console.log("Hello \t Guys!")


// Concatinate String
var firstName = "Max"
var lastName = "Verstappen"

// "MaxVerstappen"
var fullName = firstName + lastName
// "Max Verstappen"
var fullNameSpace = firstName + " " + lastName

// Concatinate with number
var a = "8"
var b = 12
// String + Number ==> Number akan diubah oleh javascript menjadi string
// "8" + "12" = "812"
var c = a + b
// 8 * 12 = 96
var d = a * b
// 8 - 12 = -4
var e = a - b

// console.log(c);
// console.log(d);
// console.log(e);


// Backtick
var intro = "My full name is" + " " + firstName + " " + lastName
console.log(intro)

var introBacktick = `My full name is ${firstName} ${lastName}`
console.log(intro)

// Tanpa variabel
console.log(`What a beautiful!`)

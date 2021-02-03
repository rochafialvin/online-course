//////////////////////////////////////////////////////////////
// CONCAT : Menggabungkan data dari dua array atau lebih
//////////////////////////////////////////////////////////////

var days = ["sunday", "monday", "tuesday", "wednesday"]
var animals = ["anoa", "dragon", "cameleon", "bird", "cat"]
var fruits = ["apple", "banana", "cherry", "lemon"]

// days + fruits
var dayFruits = days.concat(fruits)
// console.table(dayFruits)

// fruits + animals
var fruitAnim = fruits.concat(animals)
// console.table(fruitAnim)

// days + animals + fruits
var allOfThem = days.concat(animals, fruits)
console.table(allOfThem)

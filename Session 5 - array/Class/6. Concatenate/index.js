//////////////////////////////////////////////////////////////
// CONCATINATE : Menggabungkan data dari dua array atau lebih
//////////////////////////////////////////////////////////////

var days = ["sunday", "monday", "tuesday", "wednesday"]
var animals = ["anoa", "dragon", "cameleon", "bird"]
var fruits = ["apple", "banana", "cherry", "lemon"]

// days + fruits
var dayFruits = days.concat(fruits)
console.table(dayFruits)

// fruits + animals
var fruitsAni = fruits.concat(animals)
console.table(fruitsAni)

// days + animals + fruits
var allOfThem = days.concat(animals, fruits)
console.table(allOfThem)
////////////////
// Syntax Array
////////////////

// Membuat array berisi tiga data
var things = ["books", "pen", "clock"]
// ["books", "pen", "clock"]
console.log(things)

//////////////
// Access Data
//////////////

// Index dimulai dari nol

// "books"
console.log("things 0",things[0])
// "pen"
console.log(things[1])
// "clock"
console.log(things[2])

///////////////
// Change Data
///////////////

things[0] = "paper"

things[2] = "shoes"

// ["paper", "pen", "shoes"]
console.log(things)

///////////////////
// Create New Index
///////////////////

things[3] = "clock"
// ["paper", "pen", "shoes", "clock"]
console.log(things)

things[5] = "glass"
// ["paper", "pen", "shoes", "clock", undefined, "glass"]
console.log(things)

///////////////////
// Length of Array
///////////////////

console.log(things.length);
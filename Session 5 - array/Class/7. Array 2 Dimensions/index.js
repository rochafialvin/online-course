///////////////////////////////////
// ARRAY 2 D : Array di dalam array
///////////////////////////////////

// CREATE
var things = [
    ["red pen", "blue pen"],
    ["analog clock", "digital clock"],
    ["futsal shoes", "badminton shoes"]
]


// ACCESS
// Memiliki tiga value, masing - masing ada array
console.table(things)

// Memiliki dua value, "red pen", "blue pen"
// [ 'red pen', 'blue pen' ]
console.table(things[0])

// Memiliki dua value, "futsal shoes", "badminton shoes"
// [ 'futsal shoes', 'badminton shoes' ]
console.table(things[2])

// "blue pen"
console.log(things[0][1]);

// "badminton shoes"
console.log(things[2][0]);

// ADD and REMOVE

things.push(["apple", "banana"])

console.table(things)

console.table(things[3])

things.unshift(["laptop", "personal computer"])

console.table(things)

console.table(things[0])

things.pop()
things.unshift()

console.table(things)

// CHANGE DATA

things[1] = ["blue car", "red car"]

console.table(things)

things[1][0] = "black car"

console.table(things)




console.log(`Aku memiliki ${things[0][1]} dan ${things[1][0]}`);

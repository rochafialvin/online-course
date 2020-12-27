///////////////////////////////////
// ARRAY 2 D : Array di dalam array
///////////////////////////////////

var things = [
    ["red pen", "blue pen"],
    ["analog clock", "digital clock"],
    ["futsal shoes", "badminton shoes"]
]

// Memiliki tiga value, masing - masing ada array
console.table(things)

// Memiliki dua value, "red pen", "blue pen"
console.table(things[0])

// Memiliki dua value, "futsal shoes", "badminton shoes"
console.table(things[2])

// "blue pen"
console.log(things[0][1]);

// "badminton shoes"
console.log(things[2][0]);


console.log(
    `Aku memiliki dua pulpen yaitu "${things[0][0]}" dan "${things[0][1]}" `
)